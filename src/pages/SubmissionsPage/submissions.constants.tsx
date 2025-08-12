import { Document } from "./submissions.types";
import { MenuProps } from "antd";
import styles from "./SubmissionsPage.module.scss";
import {
  CloudDownloadOutlined,
  DownloadOutlined,
  EyeOutlined,
  FileAddOutlined,
  FileTextOutlined,
  InboxOutlined,
  SendOutlined,
  ShareAltOutlined,
  PrinterOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

export const items: MenuProps["items"] = [
  {
    key: "new",
    label: (
      <div className={styles.menuItem}>
        <FileAddOutlined />

        <span>Новый документ</span>
      </div>
    ),
  },
  {
    key: "sendSelected",
    label: (
      <div className={styles.menuItem}>
        <SendOutlined />
        <span>Отправить выбранные на подпись</span>
      </div>
    ),
  },
  {
    key: "sendAllUnsigned",
    label: (
      <div className={styles.menuItem}>
        <SendOutlined />
        <span>Отправить все неподписанные на подпись</span>
      </div>
    ),
  },
  {
    key: "archiveSelected",
    label: (
      <div className={styles.menuItem}>
        <InboxOutlined />
        <span>Отправить выбранные в архив</span>
      </div>
    ),
  },
  {
    key: "archiveAll",
    label: (
      <div className={styles.menuItem}>
        <InboxOutlined />
        <span>Отправить всё в архив</span>
      </div>
    ),
  },
  {
    key: "reportSelected",
    label: (
      <div className={styles.menuItem}>
        <FileTextOutlined />
        <span>Отчет о выбранных отправлениях</span>
      </div>
    ),
  },
  {
    key: "reportAll",
    label: (
      <div className={styles.menuItem}>
        <FileTextOutlined />
        <span>Отчет о всех отправлениях</span>
      </div>
    ),
  },
  {
    key: "exportSelected",
    label: (
      <div className={styles.menuItem}>
        <CloudDownloadOutlined />
        <span>Экспорт выбранных отправлений (ZIP)</span>
      </div>
    ),
  },
  {
    key: "exportAll",
    label: (
      <div className={styles.menuItem}>
        <CloudDownloadOutlined />
        <span>Экспорт всех отправлений (ZIP)</span>
      </div>
    ),
  },
];

export const itemsDocumentSettings: MenuProps["items"] = [
  {
    key: "view",
    label: (
      <div className={styles.menuItem}>
        <EyeOutlined />
        <span>Посмотреть</span>
      </div>
    ),
  },
  {
    key: "submission",
    label: (
      <div className={styles.menuItem}>
        <ShareAltOutlined />
        <span>Отправить повторно ссылку на подпись</span>
      </div>
    ),
  },
  {
    key: "downloadPDF",
    label: (
      <div className={styles.menuItem}>
        <DownloadOutlined />
        <span>Скачать PDF</span>
      </div>
    ),
  },
  {
    key: "print",
    label: (
      <div className={styles.menuItem}>
        <PrinterOutlined />
        <span>Печать</span>
      </div>
    ),
  },
  {
    key: "downloadReport",
    label: (
      <div className={styles.menuItem}>
        <FileDoneOutlined />
        <span>Скачать отчёт</span>
      </div>
    ),
  },
];

export const submissionsData: Document[] = [
  {
    created_at: "31.07.2025 16:10:17",
    sended_at: "31.07.2025 16:10:23",
    id: "103",
    name: "Документы : Акты оказания услуг",
    file: {
      path: "/files/Dbb6ce88dc92b3e7416f9a2f797f81038.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "31.07.2025 16:10:22",
        id: "103",
        did: "103",
        mid: "1",
        key: "2485bea78ea06998ee9322b28b20cf8ffbe2aaaa246f77444c7ba4b950398e11",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "31.07.2025 16:10:17",
      id: "103",
      did: "103",
      value: "ffc9fd693c73ac3635b78e5e8403bb85",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "31.07.2025 16:18:29",
        id: "110",
        did: "103",
        uid: "8201",
        key: "1603fd3f4cd1ea860d1591c8a8cd6ee9bf3a0f6fab75157ed8060b672bd79be0",
        status: 1,
        user: {
          id: "8201",
          sname: "Тестовый",
          fname: "Тестович",
          mname: null,
          email: "sergey.yanvarev@bbraun.com",
          phone: "+79212111111",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "30.07.2025 14:03:48",
    sended_at: "30.07.2025 14:03:54",
    id: "102",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D4068c4a1778312efe4aff8e7fcf4f5ed.pdf",
      type: "object_storage",
    },
    status: 6,
    document_manager_keys: [
      {
        signed_at: "30.07.2025 14:03:52",
        id: "102",
        did: "102",
        mid: "1",
        key: "27c2bbbb6a49157c18d8b3f5c1c340238cc4995fab2f7cb1314ded3d78dff511",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "30.07.2025 14:03:48",
      id: "102",
      did: "102",
      value: "488df22f963b20e751856b14e6e57279",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "30.07.2025 14:05:15",
        id: "109",
        did: "102",
        uid: "8200",
        key: "dce60d905d5e98ef0a76e67c46e253ce67c8ffad03e5bae7382c836498dc8f6f",
        status: 1,
        user: {
          id: "8200",
          sname: "Тестовый",
          fname: "Виктор",
          mname: "Викторович",
          email: "v.vinokurov@n3health.ru",
          phone: "+79360047177",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "30.07.2025 13:46:40",
    sended_at: "30.07.2025 13:46:45",
    id: "101",
    name: "Документы : Спецификация / Cчет",
    file: {
      path: "/files/D6a01141abd81198af006f6dabf638228.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "30.07.2025 13:46:43",
        id: "101",
        did: "101",
        mid: "1",
        key: "929065fbec55816b78aa3688b21158d0d754aa426338cf9e73e770c01daddd2a",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "30.07.2025 13:46:40",
      id: "101",
      did: "101",
      value: "a303c44692dd413adfd63ee364ac5120",
      status: 1,
    },
    document_user_keys: [
      {
        id: "108",
        did: "101",
        uid: "8199",
        key: "d66208c37d51433d1d327e6a6a0cd2f8d8a483ef604aeed42f97adca7dd7a604",
        status: 0,
        user: {
          id: "8199",
          sname: "Ведменская",
          fname: "Елена",
          mname: "Тестович",
          email: "e.vedmenskaya@medinvest-group.ru",
          phone: "+79999999999",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "30.07.2025 13:41:22",
    sended_at: "30.07.2025 13:42:11",
    id: "100",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D03ba9b1348be6485c455d0daa6fe723b.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "30.07.2025 13:42:10",
        id: "100",
        did: "100",
        mid: "1",
        key: "588b0ff5086f69911f7a133312ade3cbbd2e2fb821c973b9c5e24cc50ac95430",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "30.07.2025 13:41:22",
      id: "100",
      did: "100",
      value: "935c9203a899693c0e23d68a51aba5fb",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "30.07.2025 13:43:34",
        id: "107",
        did: "100",
        uid: "8198",
        key: "2c1044da5eb5b18fa81da6207619ace583ad3d3fb76f5f8d62c46c1d65d036fc",
        status: 1,
        user: {
          id: "8198",
          sname: "Майя",
          fname: "Счастливцева",
          mname: "МИГович",
          email: "mayyas86@mail.ru",
          phone: "+79999999999",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "30.07.2025 13:35:40",
    sended_at: "30.07.2025 13:35:50",
    id: "99",
    name: "Документы : Шаблон Счета для вебинаров и автоотправки  Винокурова Яна PROMEDLEX",
    file: {
      path: "/files/Ddc25528cefe2b25d5c5f8f65ce8a03ea.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "30.07.2025 13:35:49",
        id: "99",
        did: "99",
        mid: "1",
        key: "663bd871e0ff405da39c81b30e29f5ac6a1402f86d0367321f5803b7f2440d94",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "30.07.2025 13:35:40",
      id: "99",
      did: "99",
      value: "2deef1c7a497beb33beedcd7c83c3d6d",
      status: 1,
    },
    document_user_keys: [
      {
        id: "106",
        did: "99",
        uid: "8182",
        key: "7ae75a9ae0220e3503eeced9650323ca77fa6d1cbee20a390f0266e6b91575dd",
        status: 0,
        user: {
          id: "8182",
          sname: "Вольникова",
          fname: "Дарья",
          mname: "Демостендовна",
          email: "d.volnikova@n3health.ru",
          phone: "+79111193396",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "30.07.2025 09:25:26",
    sended_at: "30.07.2025 09:25:32",
    id: "98",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Dc6a1aadefe5760b238dbf93d351ee536.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "30.07.2025 09:25:29",
        id: "98",
        did: "98",
        mid: "1",
        key: "4b8d8f6a4c3d37c0779bb8e5368dc43923469b03e3d0bfff48f8053d3b8cdd75",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "30.07.2025 09:25:26",
      id: "98",
      did: "98",
      value: "7df8910a1eb587b1129e99610d950824",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "30.07.2025 09:27:21",
        id: "105",
        did: "98",
        uid: "8181",
        key: "640972f7499e3c723be9cf16042977e5987171a2a800f31f0700b99c1391de4a",
        status: 1,
        user: {
          id: "8181",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Владмирыч",
          email: "2119529@gmail.com",
          phone: "+79262119529",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "29.07.2025 11:12:57",
    sended_at: "29.07.2025 11:13:02",
    id: "97",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D15da50adbb8540185d3d6bb5923f5239.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "29.07.2025 11:13:00",
        id: "97",
        did: "97",
        mid: "1",
        key: "5f8c2f2403cb8405a99ff374b87db9a88c62a6f32374192f8d79f0a0cc729754",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "29.07.2025 11:12:57",
      id: "97",
      did: "97",
      value: "150445c610532650dd65e54988193e8c",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "29.07.2025 11:17:50",
        id: "104",
        did: "97",
        uid: "8181",
        key: "bd408ed32f930a55a59cb18f4565cb07f7dbe2f22e4c3437d8d0ef4bc8b56208",
        status: 1,
        user: {
          id: "8181",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Владмирыч",
          email: "2119529@gmail.com",
          phone: "+79262119529",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "29.07.2025 11:12:11",
    id: "96",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D4503bbadcfb3d2ede0becbf9616e05b8.pdf",
      type: "object_storage",
    },
    status: 0,
    document_manager_keys: [
      {
        id: "96",
        did: "96",
        mid: "1",
        key: "f0571445419dc0f6fea10c868e6bd0cf713ef83dd0962405c48177326ac8c450",
        status: 0,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "29.07.2025 11:12:11",
      id: "96",
      did: "96",
      value: "23cc8f6d8fcea7f985abe5f916a5f16c",
      status: 1,
    },
    document_user_keys: [
      {
        id: "103",
        did: "96",
        uid: "8181",
        key: null,
        status: 0,
        user: {
          id: "8181",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Владмирыч",
          email: "2119529@gmail.com",
          phone: "+79262119529",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "25.07.2025 11:03:00",
    sended_at: "25.07.2025 11:03:15",
    id: "95",
    name: "Документы : Спецификация / Cчет",
    file: {
      path: "/files/Dba2c0f1268828b22b9fbf6bcbad867c7.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "25.07.2025 11:03:05",
        id: "95",
        did: "95",
        mid: "1",
        key: "4433ff5ee172e505018b7e9b2f30cdae958d54c5a601751e0ff486edb6f75951",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "25.07.2025 11:03:01",
      id: "95",
      did: "95",
      value: "6b12fe888a60352083d5d491fe9efa5a",
      status: 1,
    },
    document_user_keys: [
      {
        id: "102",
        did: "95",
        uid: "8181",
        key: "f75c58aea2881dffe78ce0a0c588e38f7a2ab775adad16fda882f9b6407bec74",
        status: 0,
        user: {
          id: "8181",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Владмирыч",
          email: "2119529@gmail.com",
          phone: "+79262119529",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "01.07.2025 18:13:10",
    sended_at: "01.07.2025 18:14:08",
    id: "94",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D2d16e526a704efa91d5736cdf41d26b1.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "01.07.2025 18:14:04",
        id: "94",
        did: "94",
        mid: "1",
        key: "1f4a9dd0f593fd1a020f1337fc927cc09348dda02685915e435617d6a9e74861",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "01.07.2025 18:13:10",
      id: "94",
      did: "94",
      value: "17ce5cce0f4171f93c6a5e2b19a8131e",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "01.07.2025 23:10:30",
        id: "101",
        did: "94",
        uid: "8188",
        key: "9cbd43c60d6cdaa0f4b10f76cb9c1befb935c94be3e5462f62674d1574362ba0",
        status: 1,
        user: {
          id: "8188",
          sname: "Тестовский",
          fname: "Тест",
          mname: "Тестович",
          email: "2119529@gmail.com",
          phone: "+76678545688",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "10.06.2025 09:55:02",
    sended_at: "10.06.2025 09:55:22",
    id: "93",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D34f3dc98ec8872828093679d1cb341ac.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "10.06.2025 09:55:06",
        id: "93",
        did: "93",
        mid: "1",
        key: "f3d8ad10c0dd64f5cec5f26ba2a8dce5fb85fa2706729aa73aeb05ed662a86c6",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "10.06.2025 09:55:03",
      id: "93",
      did: "93",
      value: "f5eff197000bc97cd68659f2c9412f65",
      status: 1,
    },
    document_user_keys: [
      {
        id: "100",
        did: "93",
        uid: "8197",
        key: "4b97b34edb8b97d65a0d5301dbc50e9fa7f134f5e71d6a1035c9a111dfe99d3f",
        status: 0,
        user: {
          id: "8197",
          sname: "Башкова",
          fname: "Наталья",
          mname: "Демостендовна",
          email: "n.bashkova@n3health.ru",
          phone: "+70000000000",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "10.06.2025 09:49:06",
    sended_at: "10.06.2025 09:51:20",
    id: "92",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Ddd4233779ae66074d72080bff4554cae.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "10.06.2025 09:51:06",
        id: "92",
        did: "92",
        mid: "1",
        key: "1201be054c66cae9221466c9731f92277c03517bcf7de69290ca1fe6660bc605",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "10.06.2025 09:49:07",
      id: "92",
      did: "92",
      value: "052dc1a8cad57638273fd0e6e319981b",
      status: 1,
    },
    document_user_keys: [
      {
        id: "99",
        did: "92",
        uid: "8196",
        key: "46e5f8b3c838dce69c509a2bcb8f15bbc5f864958bea0dc82c83ea1d48dfc623",
        status: 0,
        user: {
          id: "8196",
          sname: "Ключкова",
          fname: "Елена",
          mname: "Демостендовна",
          email: "klev@vitamedrf.ru",
          phone: "+70000000000",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "10.06.2025 09:44:23",
    sended_at: "10.06.2025 09:44:48",
    id: "91",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Dee4edb953b608eb93f3d333ca517fce4.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "10.06.2025 09:44:30",
        id: "91",
        did: "91",
        mid: "1",
        key: "ae03104078910ab65727e831f9a0909550d9b97378d8f6861baeb52116cfe2fe",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "10.06.2025 09:44:24",
      id: "91",
      did: "91",
      value: "f89a737973e4031aa141fd8255fd3816",
      status: 1,
    },
    document_user_keys: [
      {
        id: "98",
        did: "91",
        uid: "8195",
        key: "f18897dac30fe2842233ba4bd44ea13661b59de78b68d46ff3b71d4957a3c138",
        status: 0,
        user: {
          id: "8195",
          sname: "Сарксиян",
          fname: "Армен",
          mname: "Демостендович",
          email: "sare@vitamedrf.ru",
          phone: "+70000000000",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 16:02:12",
    sended_at: "05.06.2025 16:02:22",
    id: "90",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Dcfe4f9f164b8612452a025b3b27c9bb4.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 16:02:21",
        id: "90",
        did: "90",
        mid: "1",
        key: "a2241aa94b89544bbaa27bced25e8b9d10291aef1e34a0144689e72d9d13ad47",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 16:02:12",
      id: "90",
      did: "90",
      value: "d09de0b2c28ffd0447a5f10b4d62bf31",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "05.06.2025 16:09:52",
        id: "97",
        did: "90",
        uid: "8181",
        key: "df6d6baf7ce53618a0741962a80a30e16ac6ba11d6a472926ac03a527abf7b5a",
        status: 1,
        user: {
          id: "8181",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Владмирыч",
          email: "2119529@gmail.com",
          phone: "+79262119529",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 16:00:42",
    sended_at: "05.06.2025 16:01:05",
    id: "89",
    name: "Документы : Спецификация / Cчет",
    file: {
      path: "/files/D9d0dee079bbc62d63d19ac93feb69031.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 16:01:03",
        id: "89",
        did: "89",
        mid: "1",
        key: "753cb48f3ee91e2f59b8b92250b542439560b6fa2b19de133a22a456de476bca",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 16:00:42",
      id: "89",
      did: "89",
      value: "ea88938ba370c758ed75feee66f2c777",
      status: 1,
    },
    document_user_keys: [
      {
        id: "96",
        did: "89",
        uid: "8194",
        key: "388290e89ffc37dd36339a47473db01929392c1fff0f9eebdbdb71b3afe4785e",
        status: 0,
        user: {
          id: "8194",
          sname: "Горшкова",
          fname: "Светлана",
          mname: ".",
          email: "svet180170",
          phone: "+7987987787",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 15:44:28",
    sended_at: "05.06.2025 15:44:38",
    id: "88",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Da2988af4ba3317737a503ec783b158e6.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 15:44:36",
        id: "88",
        did: "88",
        mid: "1",
        key: "807ffd08146d61627362333373eb34172a85f47f114b298796bf8e63704e6e31",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 15:44:28",
      id: "88",
      did: "88",
      value: "11a5682d1f0e10e6943adcbfd51971a8",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "05.06.2025 15:46:52",
        id: "95",
        did: "88",
        uid: "8193",
        key: "c0c5f82f0b082f4cf1e2e5ae9cb205649f2f77f5fb43ea308485b555cab5a4e3",
        status: 1,
        user: {
          id: "8193",
          sname: "Алексеев ",
          fname: "ВЛадимир",
          mname: null,
          email: "alexeev48@gmail.com",
          phone: "+79898989898",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 15:02:27",
    sended_at: "05.06.2025 15:02:54",
    id: "87",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D536850ce51ddee9a120f302a1828dbe9.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 15:02:52",
        id: "87",
        did: "87",
        mid: "1",
        key: "298a127914a75efbb6466f74d25253cdf164600d57ef8ce000ba9b64890df87d",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 15:02:27",
      id: "87",
      did: "87",
      value: "d951de0af8b98c00a2f76597b0ae3703",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "05.06.2025 15:06:57",
        id: "94",
        did: "87",
        uid: "8192",
        key: "f11f71c3a35b3964597a14c58b049333ca9fb1f1032f062904b9a84baba36d5b",
        status: 1,
        user: {
          id: "8192",
          sname: "Друзь",
          fname: "Михаил",
          mname: null,
          email: "m.druz@itworks.group",
          phone: "+79213034552",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 14:48:22",
    sended_at: "05.06.2025 14:48:33",
    id: "86",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Dc8121bec2554dca7f77c9fd892a17528.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 14:48:31",
        id: "86",
        did: "86",
        mid: "1",
        key: "1754f2dc9fe0db56b591b4af88eb95cd29ba99dd3b62a2537c096d7c4cb28983",
        status: 1,
        manager: {
          id: "1",
          sname: "Admin",
          fname: "Admin",
          mname: "Admin",
          email: "2119529@gmail.com",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 14:48:22",
      id: "86",
      did: "86",
      value: "d032f3ff9285886af5b55a017899f13e",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "05.06.2025 14:50:33",
        id: "93",
        did: "86",
        uid: "8191",
        key: "b44ebcf166567b3b3fc319204b6b5284cfad425849794922cefc0862743bf64d",
        status: 1,
        user: {
          id: "8191",
          sname: "Николаеав",
          fname: "Андрейей",
          mname: "Демо",
          email: "a.nikolaev@itigris.ru",
          phone: "+7090909090",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 13:03:03",
    sended_at: "05.06.2025 13:03:08",
    id: "85",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/D09528a7d4bf1c9d633e677719c891717.pdf",
      type: "object_storage",
    },
    status: 4,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 13:03:06",
        id: "85",
        did: "85",
        mid: "2",
        key: "b66316c896984874783ec63bad3f3ee6151ec10317b6c38a0913b2a272db5cdf",
        status: 1,
        manager: {
          id: "2",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Демостендович",
          email: "v.vinokurov@n3health.ru",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 13:03:03",
      id: "85",
      did: "85",
      value: "10f46cc8c8a38c2472aa06ca19c9d50c",
      status: 1,
    },
    document_user_keys: [
      {
        signed_at: "05.06.2025 13:22:23",
        id: "92",
        did: "85",
        uid: "8190",
        key: "6f422f8f3e56d58144656c8b9ae3ab1e9e2cd6edc510e951f14a09d52bdf77c9",
        status: 1,
        user: {
          id: "8190",
          sname: "Курбанов",
          fname: "Денис",
          mname: "ДокДокович",
          email: "dkurbanov@sberhealth.ru",
          phone: "+7090909090",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
  {
    created_at: "05.06.2025 12:40:06",
    sended_at: "05.06.2025 12:40:23",
    id: "84",
    name: "Документы :  Договор с приложениями",
    file: {
      path: "/files/Da396fed48439ed608436c58ee9ac20b0.pdf",
      type: "object_storage",
    },
    status: 2,
    document_manager_keys: [
      {
        signed_at: "05.06.2025 12:40:20",
        id: "84",
        did: "84",
        mid: "2",
        key: "77dc111b76d667ef94fba2723d41847e49574071e2110eceb7e87ed3d2e24043",
        status: 1,
        manager: {
          id: "2",
          sname: "Винокуров",
          fname: "Владислав",
          mname: "Демостендович",
          email: "v.vinokurov@n3health.ru",
          rule: "1",
        },
      },
    ],
    document_token: {
      created_at: "05.06.2025 12:40:06",
      id: "84",
      did: "84",
      value: "d5d656264b1b2fe24feae08945df3b54",
      status: 1,
    },
    document_user_keys: [
      {
        id: "91",
        did: "84",
        uid: "8189",
        key: "78c44fd364ae142721b2d72b62e04abac413399175940ed4f5825c6d1c6050ca",
        status: 0,
        user: {
          id: "8189",
          sname: "Баланцев",
          fname: "григорий",
          mname: null,
          email: "g.balancev@init-med.ru",
          phone: "+7988989898",
        },
      },
    ],
    document_type: {
      name: "Документы",
    },
  },
];
