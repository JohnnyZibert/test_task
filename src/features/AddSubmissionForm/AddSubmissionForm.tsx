import { FC } from "react";
import { Card, Col, Form, Input, Row } from "antd";
import styles from "./AddSubmissionForm.module.scss";
import {
  profileInfoSelectors,
  useProfileInfoStore,
} from "../../entyties/Profile/model/profileInfo.store";
import Title from "antd/es/typography/Title";

export const AddSubmissionForm: FC = () => {
  const profileInfo = useProfileInfoStore(profileInfoSelectors.profileInfo);

  // const handleChange = (field: string, value: string | Dayjs) => {
  //   setFormData({ ...formData, [field]: value });
  // };

  return (
    <Form layout="vertical" className={styles.form}>
      <Card className={styles.card}>
        <Title level={4} className={styles.title}>
          Данные сотрудника
        </Title>
        <Row gutter={18}>
          <Col span={8}>
            <Form.Item label="Фамилия">
              <Input
                disabled
                value={profileInfo.lastName}
                // onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Имя">
              <Input
                disabled
                value={profileInfo.firstName}
                // onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Отчество">
              <Input
                disabled
                value={profileInfo.middleName}
                // onChange={(e) => handleChange("middleName", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email">
              <Input
                disabled
                value={profileInfo.email}
                // onChange={(e) => handleChange("email", e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Должность">
              <Input
                disabled
                value={profileInfo.role}
                // onChange={(e) => handleChange("role", e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};
