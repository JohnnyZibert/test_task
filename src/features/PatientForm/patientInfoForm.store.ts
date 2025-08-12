import { create } from "zustand";
import { Dayjs } from "dayjs";

interface FormData {
  lastName: string;
  email: string;
  firstName: string;
  phone: string;
  middleName: string;
  status: string;
  gender: string;
  address: string;
  passportNumber: string;
  birthDate: Dayjs | null;
  issueDate: Dayjs | null;
  issuedBy: string;
}

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  clearForm: () => void;
}

// Начальное состояние формы
const initialFormData: FormData = {
  lastName: "",
  email: "",
  firstName: "",
  phone: "",
  middleName: "",
  status: "",
  gender: "",
  address: "",
  passportNumber: "",
  birthDate: null,
  issueDate: null,
  issuedBy: "",
};

export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  clearForm: () => set({ formData: initialFormData }),
}));
