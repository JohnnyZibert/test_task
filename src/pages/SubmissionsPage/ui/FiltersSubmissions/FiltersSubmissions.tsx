import {
  Card,
  Input,
  Checkbox,
  DatePicker,
  Space,
  Typography,
  Divider,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import styles from "./FiltersSubmissions.module.scss";
import { statusOptions } from "../../../../entyties/Submissons/DocumentCard/documentCard.constants";
import { FilterByCreatAtDate } from "../../../../features/FilterByCreatAtDate/FilterByCreatAtDate";

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

interface Props {
  setSearchValue: (searchValue: string) => void;
  setDateRange: (
    dateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
  ) => void;
  searchValue: string;
  dateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
  setStatuses: (statuses: string[] | ((prev: string[]) => string[])) => void;
  statuses: string[];
  setSearchInFiltered: (searchInFiltered: boolean) => void;
  searchInFiltered: boolean;
}

export const FiltersPanel = ({
  setSearchValue,
  searchValue,
  setDateRange,
  dateRange,
  setStatuses,
  statuses,
  setSearchInFiltered,
  searchInFiltered,
}: Props) => {
  const handleClearFilters = () => {
    setDateRange([null, null]);
    setStatuses([]);
  };

  return (
    <Card className={styles.container}>
      <Space direction="vertical" size="middle" className={styles.wrapper}>
        <div>
          <Title level={5}>Введите ФИО, Телефон, Email подписанта</Title>
          <Input
            placeholder="Поиск"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            allowClear
          />
          <Checkbox
            checked={searchInFiltered}
            onChange={(e) => setSearchInFiltered(e.target.checked)}
            className={styles.checkbox}
          >
            <Text>Искать в отфильтрованном</Text>
          </Checkbox>
        </div>

        <Divider className={styles.divider} />

        <Space direction="vertical">
          <div className={styles.filterWrapper}>
            <FilterByCreatAtDate
              handleClearFilters={handleClearFilters}
              setDateRange={setDateRange}
              dateRange={dateRange}
            />
            <div className={styles.filterByStatus}>
              <Text className={styles.text}>По статусу</Text>
              <Space wrap>
                {statusOptions.map((status) => (
                  <Checkbox
                    key={status}
                    checked={statuses.includes(status)}
                    onChange={(e) => {
                      setStatuses((prev) => {
                        return e.target.checked
                          ? [...prev, status]
                          : prev.filter((s: string) => s !== status);
                      });
                    }}
                  >
                    {status}
                  </Checkbox>
                ))}
              </Space>
            </div>
          </div>
        </Space>
      </Space>
    </Card>
  );
};
