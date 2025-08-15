import styles from "./AddSubmissionPage.module.scss";
import { Button } from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { DownloadOutlined, ReloadOutlined } from "@ant-design/icons";
import {
  addSubmissionSelectors,
  useAddSubmissionStore,
} from "../../features/AddSubmissionForm/model/addSubmissionForm.store";
import { AddSubmissionForm } from "../../features/AddSubmissionForm/AddSubmissionForm";
import { Signed } from "../../features/Signed/Signed";
import { FileUploadWithMeta } from "../../features/UploadFile/UploadFile";

export const AddSubmissionPage = () => {
  const clearForm = useAddSubmissionStore(addSubmissionSelectors.clearFormData);
  const formData = useAddSubmissionStore(addSubmissionSelectors.formData);

  const handleSaveForm = () => {
    console.log(formData, "сохранить форму");
  };

  return (
    <div className={styles.container}>
      <SubHeader
        title="Добавить отправление"
        renderProp={() => (
          <div className={styles.buttons}>
            <Button
              onClick={handleSaveForm}
              className={styles.button}
              icon={<DownloadOutlined />}
            >
              Сохранить
            </Button>
            <Button
              onClick={clearForm}
              className={styles.clearBtn}
              icon={<ReloadOutlined />}
            >
              Очистить
            </Button>
          </div>
        )}
      />
      <AddSubmissionForm />
      <Signed />
      <FileUploadWithMeta />
    </div>
  );
};
