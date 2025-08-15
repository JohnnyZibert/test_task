import { DocumentCard } from "../../entyties/Submissons/DocumentCard/DocumentCard";
import { items, submissionsData } from "./submissions.constants";
import {
  Button,
  Checkbox,
  CheckboxChangeEvent,
  Dropdown,
  Pagination,
  Typography,
} from "antd";
import { useState } from "react";
import styles from "./SubmissionsPage.module.scss";
import { SettingOutlined } from "@ant-design/icons";
import { FiltersPanel } from "./ui/FiltersSubmissions/FiltersSubmissions";
import dayjs from "dayjs";
import { PAGE_SIZE } from "../../shared/constants/constants";
import { statuses } from "../../entyties/Submissons/DocumentCard/documentCard.constants";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { Link } from "@tanstack/react-router";

const { Text } = Typography;

export const SubmissionsPage = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  >([null, null]);
  const [selectedStatuses, setStatuses] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInFiltered, setSearchInFiltered] = useState(false);

  const allChecked = checkedIds.length === submissionsData.length;

  const handleCheckAll = (e: CheckboxChangeEvent) => {
    const isChecked = e.target.checked;
    setCheckedIds(isChecked ? submissionsData.map((d) => d.id) : []);
  };

  const handleSingleCheck = (id: string, checked: boolean) => {
    setCheckedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };

  const filteredSubmissionsData = submissionsData.filter((document) => {
    const createdAt = dayjs(
      document.created_at,
      "DD.MM.YYYY HH:mm:ss",
    ).valueOf();

    if (dateRange?.[0] && dateRange?.[1]) {
      const start = dateRange[0].startOf("day").valueOf();
      const end = dateRange[1].endOf("day").valueOf();
      if (createdAt < start || createdAt > end) return false;
    }
    // Фильтрация по статусу
    if (
      selectedStatuses.length > 0 &&
      !selectedStatuses.includes(statuses[document.status].text)
    ) {
      return false;
    }

    return true; // документ прошёл все фильтры
  });

  //если есть что то отфильтрованное будет искать по ним, если нет, то по всем
  const currentSubmissionData =
    filteredSubmissionsData.length && searchInFiltered
      ? filteredSubmissionsData
      : submissionsData;

  const searchedSubmissionsData = currentSubmissionData.filter((document) => {
    const managerKeys = document.document_manager_keys[0].manager;
    const userKeys = document.document_user_keys[0].user;
    const currentSearchValue = searchValue.toLowerCase();

    const managersFilter =
      managerKeys.email.toLowerCase().includes(currentSearchValue) ||
      managerKeys.mname.toLowerCase().includes(currentSearchValue) ||
      managerKeys.fname.toLowerCase().includes(currentSearchValue) ||
      managerKeys.sname.toLowerCase().includes(currentSearchValue);

    const usersFilter =
      userKeys.email.toLowerCase().includes(currentSearchValue) ||
      userKeys.mname?.toLowerCase().includes(currentSearchValue) ||
      userKeys.fname.toLowerCase().includes(currentSearchValue) ||
      userKeys.sname.toLowerCase().includes(currentSearchValue);

    return usersFilter || managersFilter;
  });

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = searchedSubmissionsData.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  return (
    <div className={styles.container}>
      <SubHeader
        title="Отправления"
        renderProp={() => (
          <div className={styles.buttons}>
            <Link to={"/manager/documents/add"}>
              <Button>+ Добавить отправление</Button>
            </Link>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <Button icon={<SettingOutlined />} />
            </Dropdown>
          </div>
        )}
      />
      <FiltersPanel
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        dateRange={dateRange}
        setDateRange={setDateRange}
        statuses={selectedStatuses}
        setStatuses={setStatuses}
        setSearchInFiltered={setSearchInFiltered}
        searchInFiltered={searchInFiltered}
      />
      <Checkbox
        checked={allChecked}
        onChange={handleCheckAll}
        className={styles.checkbox}
      />
      <Text>Выделить всё из списка</Text>
      {currentData.map((document) => {
        return (
          <DocumentCard
            document={document}
            checked={checkedIds.includes(document.id)}
            onCheck={handleSingleCheck}
          />
        );
      })}
      )
      <div className={styles.paginationWrapper}>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={searchedSubmissionsData.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
