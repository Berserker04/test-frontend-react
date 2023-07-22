import toast from "react-hot-toast";

export const notifySuccess = (text: string) =>
  toast.success(text, {
    position: "top-right",
  });

export const notifyError = (text: string) =>
  toast.error(text, {
    position: "top-right",
  });
