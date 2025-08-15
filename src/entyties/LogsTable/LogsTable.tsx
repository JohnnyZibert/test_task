import styles from "./LogsTable.module.scss";
import { ColumnsType } from "antd/es/table";
import { EventRecord } from "./logsTable.types";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, Button } from "antd";
import { logsTableData } from "./logsTable.constants";
import { Key, useMemo, useState } from "react";

export const LogsTable = () => {
  const [data, setData] = useState<EventRecord[]>(logsTableData);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  // Удаление выбранных строк
  const handleOnClickDeleteSelectedRows = () => {
    setData((prev) =>
      prev.filter((item) => !selectedRowKeys.includes(item.key)),
    );
    setSelectedRowKeys([]);
  };

  // Удаление одной строки
  const handleOnClickDeleteRow = (key: string) => {
    setData((prev) => prev.filter((item) => item?.key !== key));
    setSelectedRowKeys((prev) => prev.filter((k) => k !== key));
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  const columns: ColumnsType<EventRecord> = useMemo(() => {
    return [
      {
        title: () => (
          <Button
            onClick={handleOnClickDeleteSelectedRows}
            icon={<DeleteOutlined />}
          />
        ),
        dataIndex: "checkbox",
        width: 50,
        render: () => null,
      },
      {
        title: "Тип события",
        dataIndex: "type",
        key: "type",
        width: "20%",
      },
      {
        title: "Сообщение",
        dataIndex: "details",
        key: "details",
        render: (text) => <div className={styles.details}>{text}</div>,
        width: "55%",
      },
      {
        title: "Время события",
        dataIndex: "date",
        key: "date",
        width: "15%",
      },
      {
        title: "Действия",
        dataIndex: "actions",
        render: (_, record) => {
          return (
            <Button
              className={styles.deleteBtn}
              onClick={() => handleOnClickDeleteRow(record.key)}
              shape="circle"
              icon={<DeleteOutlined />}
              danger
            />
          );
        },
      },
    ];
  }, [handleOnClickDeleteSelectedRows]);

  return (
    <div className={styles.tableWrapper}>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        pagination={{
          pageSize: 10,
          position: ["bottomRight"],
        }}
        rowKey="key"
      />
    </div>
  );
};
