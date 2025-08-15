import { Button, Form, Input, Typography } from "antd";
import styles from "./LoginForm.module.scss";
import { images } from "../../shared/assets";
import { useNavigate } from "@tanstack/react-router";

const { Link, Paragraph } = Typography;

interface FormData {
  password: string;

  email?: string;
  phone?: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values: FormData) => {
    console.log("Success:", values);
    navigate({ to: "/manager/documents" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <img src={images.logo} alt="logo" className={styles.logo} />
        <Paragraph className={styles.subtext}>
          Пожалуйста авторизуйтесь.
        </Paragraph>

        <Form layout="vertical" onFinish={onFinish} className={styles.form}>
          <Form.Item
            label="Номер телефона/Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите Email или телефон",
              },
            ]}
          >
            <Input placeholder="+7XXXXXXXXXX/Email" />
          </Form.Item>

          <div className={styles.passwordRow}>
            <label className={styles.passwordLabel}>Пароль</label>
            <Link className={styles.forgotLink}>Забыли пароль?</Link>
          </div>

          <Form.Item
            name="password"
            className={styles.passwordInput}
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitBtn}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
