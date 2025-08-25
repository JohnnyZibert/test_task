import {
  Card,
  Checkbox,
  Row,
  Col,
  Tag,
  Typography,
  Button,
  Dropdown,
  MenuProps,
} from "antd";
import { Document } from "../../../pages/SubmissionsPage/submissions.types";
import styles from "./DocumentCard.module.scss";
import { statuses } from "./documentCard.constants";
import {
  DownloadOutlined,
  EyeOutlined,
  FileDoneOutlined,
  PrinterOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";

const { Text, Paragraph } = Typography;

interface Props {
  document: Document;
  checked: boolean;
  onCheck: (id: string, checked: boolean) => void;
}

export const DocumentCard = (props: Props) => {
  const navigate = useNavigate();
  const {
    name,
    created_at,
    sended_at,
    status,
    document_manager_keys,
    document_user_keys,
    id,
  } = props.document;

  const handleOnView = () => {
    navigate({ to: `/manager/document/${id}` });
  };
  const itemsDocumentSettings: MenuProps["items"] = [
    {
      key: "view",
      label: (
        <div className={styles.menuItem}>
          <EyeOutlined />
          <span>Посмотреть</span>
        </div>
      ),
      onClick: handleOnView,
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

  return (
    <Card className={styles.cardContainer}>
      <Row align="top" gutter={16}>
        <Col className={styles.headerCard}>
          <div>
            <Checkbox
              checked={props.checked}
              onChange={(e) => props.onCheck(id, e.target.checked)}
            />
            <Text className={styles.title}>{name}</Text>
          </div>
          <Dropdown
            menu={{ items: itemsDocumentSettings }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button
              type="primary"
              className={styles.setting}
              icon={<SettingOutlined />}
            />
          </Dropdown>
        </Col>

        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={2}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время создания
              </Paragraph>
              <Paragraph className={styles.boldText}>{created_at}</Paragraph>
            </Col>
            <Col span={2}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время отправки
              </Paragraph>
              <Paragraph className={styles.boldText}>{sended_at}</Paragraph>
            </Col>
            <Col className={styles.sendStatus} span={3}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус отправления
              </Paragraph>
              <Tag className={styles.tag} color={statuses[status].statusColor}>
                {statuses[status].text}
              </Tag>
            </Col>
          </Row>
        </Col>

        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус подписанта
              </Paragraph>
              <Text strong>Отправитель</Text>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                ФИО
              </Paragraph>
              <Paragraph type="secondary">
                {document_manager_keys[0].manager.fname}{" "}
                {document_manager_keys[0].manager.mname}{" "}
                {document_manager_keys[0].manager.sname}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Email
              </Paragraph>
              <Paragraph type="secondary">
                {document_manager_keys[0].manager.email}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время подписи
              </Paragraph>
              <Paragraph type="secondary">
                {document_manager_keys[0].signed_at}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус
              </Paragraph>
              <Tag
                className={styles.tag}
                color={statuses[document_manager_keys[0].status].statusColor}
              >
                {statuses[document_manager_keys[0].status].text}
              </Tag>
            </Col>
          </Row>
        </Col>

        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус подписанта
              </Paragraph>
              <Text strong>Получатель</Text>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                ФИО
              </Paragraph>
              <Paragraph type="secondary">
                {document_user_keys[0].user.fname}{" "}
                {document_user_keys[0].user.mname}{" "}
                {document_user_keys[0].user.sname}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Email
              </Paragraph>
              <Paragraph type="secondary">
                {document_user_keys[0].user.email}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время подписи
              </Paragraph>
              <Paragraph type="secondary">
                {document_user_keys[0].signed_at}
              </Paragraph>
            </Col>
            <Col span={4} className={styles.col}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус
              </Paragraph>
              <Tag
                className={styles.tag}
                color={statuses[document_user_keys[0].status].statusColor}
              >
                {statuses[document_user_keys[0].status].text}
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
