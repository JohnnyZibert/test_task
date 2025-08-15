import styles from "./PatientsPage.module.scss";
import { Button, Input, Select, Typography } from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { useState } from "react";
import { PatientInfoForm } from "../../features/PatientForm/PatientInfoForm";
import { Link } from "@tanstack/react-router";
import { optionsSearch, routesPath } from "../../shared/constants/constants";

const { Text } = Typography;

export const PatientsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Внешний ID");

  const handleOnChangeSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleOnChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
      <SubHeader
        title="Клиенты"
        renderProp={() => (
          <Link to={routesPath.ADD_NEW_PATIENT}>
            <Button className={styles.button}>+ Добавить</Button>
          </Link>
        )}
      />
      <div className={styles.cardContainer}>
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
      </div>

      <PatientInfoForm />
    </div>
  );
};
