import styles from "./StatsPage.module.scss";
import {
  Button,
  Checkbox,
  CheckboxChangeEvent,
  Space,
  Table,
  Typography,
} from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { useState } from "react";
import { PatientInfoForm } from "../../features/PatientForm/PatientInfoForm";
import { Link } from "@tanstack/react-router";
import { routesPath } from "../../shared/constants/constants";
import { DownloadOutlined } from "@ant-design/icons";
import { FilterByCreatAtDate } from "../../features/FilterByCreatAtDate/FilterByCreatAtDate";
import dayjs from "dayjs";
import {
  columns,
  eventTypeOptions,
  mockTableData,
} from "./statsPage.constants";

const { Text } = Typography;

type EventType = Record<
  string,
  { checkedStatus: boolean; label: string; key: string }
>;

export const StatsPage = () => {
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  >([null, null]);
  const [eventType, setEventType] = useState<EventType>({
    sendSms: { checkedStatus: false, label: "Отправка СМС", key: "sendSms" },
  });

  const handleClearFilters = () => {
    setDateRange([null, null]);
  };

  const handleChangeCheckbox = (key: string, checked: boolean) => {
    setEventType((prev) => {
      return { ...prev, [key]: { ...prev[key], checkedStatus: checked } };
    });
  };

  return (
    <div className={styles.container}>
      <SubHeader
        title="Статистика"
        renderProp={() => (
          <Link to={routesPath.ADD_NEW_PATIENT}>
            <Button className={styles.button} icon={<DownloadOutlined />}>
              Выгрузить отчёт (CSV)
            </Button>
          </Link>
        )}
      />
      <div className={styles.cardContainer}>
        <div className={styles.filterWrapper}>
          <FilterByCreatAtDate
            handleClearFilters={handleClearFilters}
            setDateRange={setDateRange}
            dateRange={dateRange}
          />
          <div className={styles.filterType}>
            <Text>Тип события</Text>
            <Space wrap>
              {Object.keys(eventTypeOptions)?.map((event) => {
                console.log(event, "event");
                return (
                  <Checkbox
                    value={eventType[event]?.checkedStatus}
                    onChange={(e) =>
                      handleChangeCheckbox(event, e.target.checked)
                    }
                  >
                    <Text>{eventTypeOptions[event].label}</Text>
                  </Checkbox>
                );
              })}
            </Space>
          </div>
        </div>
        <Table
          className={styles.table}
          columns={columns}
          dataSource={mockTableData}
          pagination={{
            pageSize: 15, // кол-во строк на странице
            position: ["bottomLeft"], // позиция пагинации
          }}
        />
      </div>
    </div>
  );
};
