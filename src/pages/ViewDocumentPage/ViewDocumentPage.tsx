import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import styles from "./ViewDocumentPage.module.scss";
import {
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Row,
  Tag,
  Typography,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { settingsMenuItems } from "../../entyties/LogsTable/logsTable.constants";
import { statuses } from "../../entyties/Submissons/DocumentCard/documentCard.constants";
import { useParams } from "@tanstack/react-router";
import { submissionsData } from "../SubmissionsPage/submissions.constants";
import { PdfViewer } from "../../widgets/PDFviewer/PdfViewer.tsx";

const { Text, Paragraph } = Typography;

export const ViewDocumentPage = () => {
  const { id } = useParams({ from: "/manager/document/$id" });
  const document = submissionsData.find((document) => document.id === id);
  const managerKeys = document?.document_manager_keys;
  const userKeys = document?.document_user_keys;

  if (!document?.id) return null;

  return (
    <div className={styles.container}>
      <SubHeader
        title="Документы: Акты оказания услуг"
        renderProp={() => (
          <div className={styles.buttons}>
            <Dropdown
              menu={{ items: settingsMenuItems }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <Button className={styles.button} icon={<SettingOutlined />} />
            </Dropdown>
          </div>
        )}
      />

      <Card className={styles.card}>
        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={2}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время создания
              </Paragraph>
              <Paragraph className={styles.boldText}>
                {document?.created_at}
              </Paragraph>
            </Col>
            <Col span={2}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время отправки
              </Paragraph>
              <Paragraph className={styles.boldText}>
                {document?.sended_at}
              </Paragraph>
            </Col>
            <Col className={styles.sendStatus} span={3}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус отправления
              </Paragraph>
              <Tag
                className={styles.tag}
                color={statuses[document.status].statusColor}
              >
                {statuses[document.status].text}
              </Tag>
            </Col>
          </Row>
        </Col>
      </Card>

      {/* Блок подписантов */}
      <Card className={styles.card}>
        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус подписанта
              </Paragraph>
              <Text strong className={styles.badgeGreenLight}>
                Отправитель
              </Text>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                ФИО
              </Paragraph>
              <Paragraph type="secondary">
                {managerKeys?.[0].manager.fname}{" "}
                {managerKeys?.[0].manager.mname}{" "}
                {managerKeys?.[0].manager.sname}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Email
              </Paragraph>
              <Paragraph type="secondary">
                {managerKeys?.[0].manager.email}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время подписи
              </Paragraph>
              <Paragraph type="secondary">
                {managerKeys?.[0].signed_at}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус
              </Paragraph>
              <Tag
                className={styles.tag}
                color={statuses[(managerKeys ?? [])[0].status].statusColor}
              >
                {statuses[(managerKeys ?? [])[0].status].text}
              </Tag>
            </Col>
          </Row>
        </Col>
        <Divider />
        <Col className={styles.contentWrapper}>
          <Row gutter={16} className={styles.headRow}>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус подписанта
              </Paragraph>
              <Text strong className={styles.badgeBlue}>
                Получатель
              </Text>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                ФИО
              </Paragraph>
              <Paragraph type="secondary">
                {userKeys?.[0].user.fname} {userKeys?.[0].user.mname}{" "}
                {userKeys?.[0].user.sname}
              </Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Email
              </Paragraph>
              <Paragraph type="secondary">{userKeys?.[0].user.email}</Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Время подписи
              </Paragraph>
              <Paragraph type="secondary">{userKeys?.[0].signed_at}</Paragraph>
            </Col>
            <Col span={4}>
              <Paragraph type="secondary" className={styles.rowTime}>
                Статус
              </Paragraph>
              <Tag
                className={styles.tag}
                color={statuses[(userKeys ?? [])[0].status].statusColor}
              >
                {statuses[(userKeys ?? [])[0].status].text}
              </Tag>
            </Col>
          </Row>
        </Col>
      </Card>
      <PdfViewer />
    </div>
  );
};
