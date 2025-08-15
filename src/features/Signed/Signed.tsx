import styles from "./Signed.module.scss";
import { Button, Card, Input, Modal, Select, Table, Typography } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { optionsSearch } from "../../shared/constants/constants";
import {
  mockSignedTableData,
  PatientInfo,
  signedColumns,
} from "./statsPage.constants";

const { Title, Text } = Typography;

export const Signed = () => {
  const [isOpenPopup, setOpenPopup] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Внешний ID");
  const [selectedPatient, setSelectedPatient] = useState<PatientInfo[]>([]);

  const handleOnChangeSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleOnChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleCancel = () => {
    setOpenPopup(false);
  };

  const handleClickOnRow = (data: PatientInfo) => {
    setSelectedPatient([data]);
    setOpenPopup(false);
  };

  const handleDelete = (id: string) => {
    setSelectedPatient((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const selectedPatientColumns = [
    {
      title: "ФИО",
      dataIndex: "fullName",
      key: "fullName123123",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email123123",
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone1231231",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      render: (_: unknown, record: { id: string }) => (
        <Button
          className={styles.deleteBtn}
          onClick={() => handleDelete(record.id)}
        >
          <DeleteOutlined className={styles.delete} />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Card className={styles.card}>
        <Title level={4} className={styles.title}>
          Подписанты
        </Title>
        {selectedPatient?.length ? (
          <Table
            className={styles.table}
            columns={selectedPatientColumns}
            dataSource={selectedPatient}
            pagination={{
              pageSize: 15, // кол-во строк на странице
              position: ["bottomLeft"], // позиция пагинации
            }}
          />
        ) : (
          <div className={styles.content}>
            <Title level={5} className={styles.title}>
              Список подписантов пуст
            </Title>
            <Text>
              Нажмите кнопку <b>"Добавить подписанта"</b>.
            </Text>
            <Button
              onClick={handleOpenPopup}
              className={styles.addSignedBtn}
              icon={<PlusOutlined />}
            >
              Добавить подписанта
            </Button>
          </div>
        )}
      </Card>
      <Modal
        title={
          <Title level={4} className={styles.title}>
            Поиск клиента
          </Title>
        }
        open={isOpenPopup}
        onCancel={handleCancel}
        footer={false}
        className={styles.modal}
      >
        <div className={styles.wrapper}>
          <div className={styles.selectWrapper}>
            <Text>Поиск по</Text>
            <Select
              defaultValue="externalId"
              options={optionsSearch}
              value={selectedValue}
              className={styles.select}
              onChange={(value) => handleOnChangeSelect(value)}
            />
          </div>
          <div className={styles.search}>
            <Text>Введите строку для поиска</Text>
            <Input
              placeholder="Поиск"
              value={searchValue}
              onChange={(e) => handleOnChangeSearch(e.target.value)}
              allowClear
            />
          </div>
        </div>
        <Table
          className={styles.table}
          onRow={(record) => ({
            onClick: () => {
              handleClickOnRow(record);
            },
          })}
          columns={signedColumns}
          dataSource={mockSignedTableData}
          pagination={{
            pageSize: 15, // кол-во строк на странице
            position: ["bottomLeft"], // позиция пагинации
          }}
        />
      </Modal>
    </>
  );
};
