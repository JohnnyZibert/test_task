import styles from "./SubHeader.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

interface Props {
  title: string;
}

export const SubHeader = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <Title level={4} className={styles.title}>
        {title}
      </Title>
    </div>
  );
};
