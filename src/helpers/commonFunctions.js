import { toast } from "react-toastify";

// One time toast message show //
const toastList = new Set();
const MAX_TOAST = 1;

export function notify(message, messageType) {
  if (toastList.size < MAX_TOAST) {
    let id;
    if (messageType === "success") {
      id = toast.success(message, {
        autoClose: 1500,
        onClose: () => toastList.delete(id),
      });
    } else {
      id = toast.error(message, {
        autoClose: 1500,
        onClose: () => toastList.delete(id),
      });
    }
    toastList.add(id);
  }
}