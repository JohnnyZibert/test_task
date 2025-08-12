export const eventTypeOptions: Record<
  string,
  { checkedStatus: boolean; label: string; key: string }
> = {
  sendSms: { checkedStatus: false, label: "Отправка СМС", key: "sendSms" },
  sendRequest: {
    checkedStatus: false,
    label: "Отправка запроса МТС RIM",
    key: "sendRequest",
  },
};

interface Item {
  type: string;
  view: string;
  data: string;
  createdAt: string;
}

export const mockTableData: Item[] = [
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79181622307",
    createdAt: "25.05.2024 16:08:10",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79181622307",
    createdAt: "25.05.2024 17:21:37",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
  {
    type: "CMC",
    view: "Отправка анкеты",
    data: "+79262119529",
    createdAt: "26.05.2024 22:25:14",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79262119529",
    createdAt: "27.05.2024 18:09:37",
  },
  {
    type: "CMC",
    view: "Отправка документов на подпись",
    data: "+79360047177",
    createdAt: "31.05.2024 12:28:31",
  },
];

export const columns = [
  {
    title: "Тип",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Вид",
    dataIndex: "view",
    key: "view",
  },
  {
    title: "Данные",
    dataIndex: "data",
    key: "data",
  },
  {
    title: "Созданно",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];
