// src/utils/toast.ts
import toast from "react-hot-toast";

export const notify = {
  success: (msg) => toast.success(msg),
  error: (msg) => toast.error(msg),
  loading: (msg) => toast.loading(msg),
};