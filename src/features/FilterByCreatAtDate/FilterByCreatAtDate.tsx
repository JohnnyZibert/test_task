import styles from "./FilterByCreatAtDate.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { DatePicker, Typography } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

interface Props {
  setDateRange: (
    dateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
  ) => void;
  dateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
  handleClearFilters: () => void;
}

export const FilterByCreatAtDate = ({
  handleClearFilters,
  dateRange,
  setDateRange,
}: Props) => {
  return (
    <div className={styles.filterCreateDate}>
      <div className={styles.filterTitleWrapper}>
        <Title level={5} className={styles.title}>
          Фильтр
        </Title>
        <ReloadOutlined
          className={styles.clearFilters}
          onClick={handleClearFilters}
          title="Сбросить фильтры"
        />
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.createDate}>
          <Text>По дате создания</Text>
          <RangePicker
            value={dateRange}
            onChange={(dates) => setDateRange(dates)}
            placeholder={["От", "До"]}
          />
        </div>
      </div>
    </div>
  );
};
