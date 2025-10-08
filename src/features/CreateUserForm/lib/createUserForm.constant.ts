import { FormRule } from "antd";

export const validationRules: Record<string, FormRule[]> = {
  firstName: [
    { required: true, message: "Введите имя" },
    { min: 2, message: "Имя должно содержать минимум 2 символа" },
  ],
  email: [
    { required: true, message: "Введите email" },
    { type: "email", message: "Некорректный формат email" },
  ],
  phone: [
    { required: true, message: "Введите телефон" },
    {
      pattern: /^\+7\s?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      message: "Введите корректный номер телефона (пример: +7 999 123 45 67)",
    },
  ],
  role: [{ required: true, message: "Выберите роль" }],
};

export const roles = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
  { value: "manager", label: "Manager" },
];
