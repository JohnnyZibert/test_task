export const statuses: Record<number, { text: string; statusColor: string }> = {
  0: {
    text: "Черновик",
    statusColor: "var(--color-neutral-400)",
  },
  1: {
    text: "Подписан отправителем",
    statusColor: "var(--color-warning-300)",
  },
  2: {
    text: "Отправлен",
    statusColor: "var(--color-success-500)",
  },
  3: {
    text: "Подписан не всеми",
    statusColor: "var(--color-error-200)",
  },
  4: {
    text: "Подписан",
    statusColor: "var(--color-success-400)",
  },
  5: {
    text: "Подписан ЭЦП",
    statusColor: "var(color-success-300)",
  },
  6: {
    text: "Архив",
    statusColor: "var(--color-neutral-450)",
  },
};

export const statusOptions = [
  "Черновик",
  "Подписан отправителем",
  "Отправлен",
  "Подписан не всеми",
  "Подписан",
  "Подписан ЭЦП",
  "Архив",
];
