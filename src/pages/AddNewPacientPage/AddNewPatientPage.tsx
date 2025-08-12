import styles from "./AddNewPatientPage.module.scss";
import { Button } from "antd";
import { SubHeader } from "../../shared/ui/SubHeader/SubHeader";
import { PatientInfoForm } from "../../features/PatientForm/PatientInfoForm";
import { DownloadOutlined, ReloadOutlined } from "@ant-design/icons";
import { useFormStore } from "../../features/PatientForm/patientInfoForm.store";

export const AddNewPatientPage = () => {
  const clearForm = useFormStore().clearForm;
  const formData = useFormStore((state) => state.formData);

  const handleSaveForm = () => {
    console.log(formData, "сохранить форму");
  };

  return (
    <div className={styles.container}>
      <SubHeader
        title="Новый клиет"
        renderProp={() => (
          <div className={styles.buttons}>
            <Button
              onClick={handleSaveForm}
              className={styles.button}
              icon={<DownloadOutlined />}
            >
              Сохранить
            </Button>
            <Button
              onClick={clearForm}
              className={styles.clearBtn}
              icon={<ReloadOutlined />}
            >
              Очистить
            </Button>
          </div>
        )}
      />
      <PatientInfoForm />
    </div>
  );
};
