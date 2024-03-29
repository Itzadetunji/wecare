import { toast, ToastOptions } from "react-toastify";

const toastConfig: ToastOptions = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

export const Toast = {
	success: (message: string) =>
		toast.success(message, { ...toastConfig, theme: "colored" }),
	info: (message: string) => toast.info(message, toastConfig),
	warning: (message: string) => toast.warning(message, toastConfig),
	error: (message: string) =>
		toast.error(message, { ...toastConfig, theme: "colored" }),
};
