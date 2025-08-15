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
}

// Начальное состояние формы
const initialFormData: FormData = {
  lastName: "Згирдан",
  email: "zgirdan@mail.ru",
  firstName: "Евгений",
  middleName: "Васильевич",
  role: "Фронт",
};

export const useProfileInfoStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  clearForm: () => set({ formData: initialFormData }),
}));

export const profileInfoSelectors = {
  profileInfo: (state: FormStore) => state.formData,
  setProfileInfo: (state: FormStore) => state.setFormData,
};
