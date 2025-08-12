import styles from "./LogsEvents.module.scss";
import { Button } from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { Link } from "@tanstack/react-router";
import { routesPath } from "../../shared/constants/constants";
import { SettingOutlined } from "@ant-design/icons";

export const LogsEvents = () => {
  // const [dateRange, setDateRange] = useState<
  //   [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  // >([null, null]);
  // const [eventType, setEventType] = useState<EventType>({
  //   sendSms: { checkedStatus: false, label: "Отправка СМС", key: "sendSms" },
  //   sendRequest: {
  //     checkedStatus: false,
  //     label: "Отправка запроса МТС RIM",
  //     key: "sendRequest",
  //   },
  // });
  //
  // const handleClearFilters = () => {
  //   setDateRange([null, null]);
  // };
  //
  // const handleChangeCheckbox = (key: string, checked: boolean) => {
  //   setEventType((prev) => {
  //     return { ...prev, [key]: { ...prev[key], checkedStatus: checked } };
  //   });
  // };

  return (
    <div className={styles.container}>
      <SubHeader
        title="Лог событий"
        renderProp={() => (
          <Link to={routesPath.ADD_NEW_PATIENT}>
            <Button className={styles.button} icon={<SettingOutlined />} />
          </Link>
        )}
      />
      {/*<Table*/}
      {/*  className={styles.table}*/}
      {/*  columns={columns}*/}
      {/*  dataSource={mockTableData}*/}
      {/*  pagination={{*/}
      {/*    pageSize: 15, // кол-во строк на странице*/}
      {/*    position: ["bottomLeft"], // позиция пагинации*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};
