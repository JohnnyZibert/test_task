import { FC } from "react";
import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { Dayjs } from "dayjs";
import styles from "./PatientInfoForm.module.scss";
import { useFormStore } from "./patientInfoForm.store";

const { Option } = Select;

export const PatientInfoForm: FC = () => {
  const formData = useFormStore((state) => state.formData);
  const setFormData = useFormStore().setFormData;

  const handleChange = (field: string, value: string | Dayjs) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Form layout="vertical" className={styles.form}>
      <Card className={styles.card}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item required label="Фамилия">
              <Input
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email">
              <Input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Имя *">
              <Input
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Телефон *">
              <Input
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Отчество">
              <Input
                value={formData.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Статус *">
              <Select
                className={styles.select}
                value={formData.status}
                onChange={(value) => handleChange("status", value)}
                placeholder="Активен"
              >
                <Option value="active">Активен</Option>
                <Option value="inactive">Неактивен</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Пол *">
              <Select
                className={styles.select}
                value={formData.gender}
                onChange={(value) => handleChange("gender", value)}
                placeholder="Мужской"
              >
                <Option value="male">Мужской</Option>
                <Option value="female">Женский</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Адрес">
              <Input
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <Card className={styles.card} title="Паспорт РФ">
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Серия, номер">
              <Input
                value={formData.passportNumber}
                onChange={(e) => handleChange("passportNumber", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Дата рождения">
              <DatePicker
                value={formData.birthDate}
                onChange={(date) => handleChange("birthDate", date)}
                style={{ width: "100%" }}
                format="DD/MM/YYYY"
                placeholder="Выбрать дату"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Дата выдачи">
              <DatePicker
                value={formData.issueDate}
                onChange={(date) => handleChange("issueDate", date)}
                style={{ width: "100%" }}
                format="DD/MM/YYYY"
                placeholder="Выбрать дату"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Кем выдан">
              <Input
                value={formData.issuedBy}
                onChange={(e) => handleChange("issuedBy", e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};
