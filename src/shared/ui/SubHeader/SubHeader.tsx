import styles from "./SubHeader.module.scss";
import { Typography } from "antd";
import { ReactNode } from "react";

const { Title } = Typography;

interface Props {
  title: string;
  renderProp: () => ReactNode;
}

export const SubHeader = ({ title, renderProp }: Props) => {
  return (
    <div className={styles.container}>
      <Title level={4} className={styles.title}>
        {title}
      </Title>
      {renderProp()}
    </div>
  );
};
