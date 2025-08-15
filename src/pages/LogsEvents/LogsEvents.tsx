import styles from "./LogsEvents.module.scss";
import { Button, Dropdown } from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { SettingOutlined } from "@ant-design/icons";
import { LogsTable } from "../../entyties/LogsTable/LogsTable";
import { settingsMenuItems } from "../../entyties/LogsTable/logsTable.constants";

export const LogsEvents = () => {
  return (
    <div className={styles.container}>
      <SubHeader
        title="Лог событий"
        renderProp={() => (
          <Dropdown
            menu={{ items: settingsMenuItems }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button className={styles.button} icon={<SettingOutlined />} />
          </Dropdown>
        )}
      />
      <LogsTable />
    </div>
  );
};
