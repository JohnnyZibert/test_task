import { create } from "zustand";

interface FormData {
  lastName: string;
  email: string;
  firstName: string;
  middleName: string;
  role: string;
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
  middleName: "",
  role: "",
};

export const useAddSubmissionStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  clearForm: () => set({ formData: initialFormData }),
}));

export const addSubmissionSelectors = {
  formData: (state: FormStore) => state.formData,
  setFormData: (state: FormStore) => state.setFormData,
  clearFormData: (state: FormStore) => state.clearForm,
};
