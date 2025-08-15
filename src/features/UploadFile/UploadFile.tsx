import { useState } from "react";
import { CloseOutlined, CloudUploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Select, Typography, Upload } from "antd";
import type { UploadFile } from "antd/es/upload";
import styles from "./UploadFile.module.scss";

const { Dragger } = Upload;
const { Text } = Typography;

interface UploadedFileMeta {
  uid: string;
  name: string;
  type: string;
}

const options = [
  { value: "default", label: "Выберите тип" },
  { value: "contract", label: "Договор с приложениями" },
  { value: "passport", label: "Паспорт" },
  { value: "other", label: "Другое" },
];

export const FileUploadWithMeta = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileMetaList, setFileMetaList] = useState<UploadedFileMeta[]>([]);

  const handleRemove = (uid: string) => {
    setFileList((prev) => prev.filter((f) => f.uid !== uid));
    setFileMetaList((prev) => prev.filter((f) => f.uid !== uid));
  };

  console.log(fileList, "fileList");

  const props: UploadProps = {
    name: "file",
    multiple: true,
    showUploadList: false,
    beforeUpload(file) {
      setFileList((prev) => [...prev, file]);
      setFileMetaList((prev) => [
        ...prev,
        { uid: file.uid, name: file.name, type: "default" },
      ]);
      return false;
    },
  };

  const handleTypeChange = (uid: string, newType: string) => {
    setFileMetaList((prev) =>
      prev.map((item) =>
        item.uid === uid ? { ...item, type: newType } : item,
      ),
    );
  };

  return (
    <div className={styles.container}>
      <Typography.Title level={5}>Загрузка файлов</Typography.Title>

      <Dragger {...props} className={styles.dragger}>
        <div className={styles.iconWrapper}>
          <CloudUploadOutlined className={styles.uploadIcon} />
        </div>
        <Text>
          Нажмите для выбора файлов на компьютере или перетащите файлы в эту
          область…
        </Text>
      </Dragger>

      <ul className={styles.fileList}>
        {fileMetaList.map((file) => (
          <li key={file.uid} className={styles.uploadedFileBlock}>
            <div className={styles.fileHeader}>
              <Text strong>{file.name}</Text>
              <Button
                type="text"
                icon={<CloseOutlined />}
                danger
                onClick={() => handleRemove(file.uid)}
              />
            </div>

            <div className={styles.fileTypeWrapper}>
              <label className={styles.label}>Вид документа</label>
              <Select
                value={file.type}
                onChange={(value) => handleTypeChange(file.uid, value)}
                className="w-full"
                options={options}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
