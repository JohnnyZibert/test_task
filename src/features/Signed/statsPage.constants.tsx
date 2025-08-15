import { ReactNode } from "react";

export interface PatientInfo {
  fullName: string;
  email: string;
  phone: string;
  id: string;
  delete?: ReactNode;
}

export const mockSignedTableData: PatientInfo[] = [
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "awdawd123123",
  },
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "gdfgdgdfg",
  },
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "3453sfef",
  },
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "13adawdad",
  },
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "13adawawdawddad",
  },
  {
    fullName: "Згирдан Евгений Васильевич",
    email: "zgirdan@mail.ru",
    phone: "+79181622307",
    id: "13adsdfdsfawdad",
  },
];

export const signedColumns = [
  {
    title: "ФИО",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
    key: "phone",
  },
];
