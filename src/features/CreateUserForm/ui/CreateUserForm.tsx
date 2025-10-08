import { FC, useEffect } from "react";
import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import styles from "./CreateUserForm.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { openNotification } from "../lib/createUserForm.helpers";
import type { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { roles, validationRules } from "../lib/createUserForm.constant";
import {
  useCreateUser,
  useEditUser,
  useGetUser,
} from "../../../shared/api/users";
import { useParams } from "@tanstack/react-router";

export const CreateUserForm: FC = () => {
  const { userId } = useParams({ strict: false });

  const [form] = Form.useForm();
  const { mutateAsync } = useCreateUser();
  const { mutateAsync: editUser } = useEditUser();
  const { data: userData } = useGetUser(userId || "");

  useEffect(() => {
    if (userData?.data) {
      form.setFieldsValue(userData?.data);
    }
  }, [userId, userData]);

  const handleEditUser = async () => {
    const values = await form.validateFields();
    await editUser(
      { ...values, id: userId },
      {
        onSuccess: () => {
          openNotification("✅Данные измененны");
          form.resetFields();
        },
      },
    );
  };

  const handleSubmit = async () => {
    try {
      if (userId) {
        await handleEditUser();
        return;
      }
      const values = await form.validateFields();
      await mutateAsync(values, {
        onSuccess: () => {
          openNotification("✅ Пользователь создан");
          form.resetFields();
        },
      });
    } catch (err: unknown) {
      const error = err as ValidateErrorEntity;
      const errors = error.errorFields.map((error, index) => (
        <div key={`${error.name}${index}`}>❌{error.errors[0]}</div>
      ));
      openNotification(errors);
    }
  };

  const handleClearForm = () => {
    form.resetFields();
  };

  return (
    <Form layout="vertical" form={form} className={styles.form}>
      <Card className={styles.card}>
        <Row gutter={24} className={styles.formRow}>
          <Col className={styles.row}>
            <Form.Item
              name="name"
              label="Имя"
              rules={validationRules.firstName}
            >
              <Input placeholder="Введите имя" />
            </Form.Item>
          </Col>

          <Col className={styles.row}>
            <Form.Item name="email" label="Email" rules={validationRules.email}>
              <Input placeholder="Введите email" />
            </Form.Item>
          </Col>

          <Col className={styles.row}>
            <Form.Item
              name="phone"
              label="Телефон"
              rules={validationRules.phone}
            >
              <Input placeholder="+7 999 123 45 67" />
            </Form.Item>
          </Col>

          <Col className={styles.row}>
            <Form.Item name="role" label="Роль" rules={validationRules.role}>
              <Select
                placeholder="Выберите роль"
                options={roles}
                className={styles.select}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className={styles.rowButtons}>
          <Col className={styles.actionButtons}>
            <Button
              onClick={handleClearForm}
              type="primary"
              icon={<ReloadOutlined />}
            >
              Очистить
            </Button>
            <Button
              type="default"
              className={styles.saveUser}
              onClick={handleSubmit}
            >
              {userId ? "Сохранить изменения" : "Сохранить"}
            </Button>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};
