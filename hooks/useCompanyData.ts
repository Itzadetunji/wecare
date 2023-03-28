import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";
import { Toast } from "@/utils/toast";
import { deleteCookie, setCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const fetchCompany = ({ queryKey }: any) => {
	return request({
		url: `/auth/`,
	});
};

const createCompany = (data: any) => {
	return request({ url: "/users/register/", method: "post", data });
};

const loginCompany = (data: any) => {
	return request({ url: `/auth/`, method: "post", data });
};

const logoutCompany = (data: any) => {
	return request({ url: "/users/logout/", method: "post", data });
};

export const useGetCompany = (onError: any, onSuccess: any) => {
	return useQuery<any, Error>(["customer"], fetchCompany, {
		onSuccess,
		onError,
	});
};

export const useCreateCompany = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation(createCompany, {
		onSuccess: (data: any) => {
			if (
				data.response &&
				data.response.status >= 400 &&
				data.response.status < 500
			) {
				throw new Error(data);
			}
			onSuccess();
			setCookie("rf-token", data.data.refresh_token, 1);
			setCookie("ac-token", data.data.access_token, 1);
			setCookie("username", data.data.user.username, 1);
			setCookie("pk", data.data.user.pk, 1);
			Toast.success(
				"Account has been created 🤩. Kindly check your phone for an OTP code"
			);
			router.push("/");
		},
		onError: (error: any) => {
			Toast.error("Error: Could not create user");
			console.log(error);
		},
	});
};

export const useLoginCompany = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation(loginCompany, {
		onSuccess: (data: any) => {
			if (
				data.response &&
				data.response.status >= 400 &&
				data.response.status < 500
			) {
				throw new Error(data);
			}
			setCookie("rf-token", data.data.refresh_token, 1);
			setCookie("ac-token", data.data.access_token, 1);
			setCookie("username", data.data.user.username, 1);
			setCookie("market", data.data.user.customer_profile.market, 1);
			// const user = jwt.sign(data.data.customer_profile, "HaD1R0cks", {
			// 	algorithm: "RS256",
			// });
			// setCookie("customer_details", user, 1);
			router.push("/");
			console.log(data);
		},
		onError: (error: any) => {
			Toast.error("Error: Could not login please try again later");
			console.log(error);
		},
	});
};

export const useLogoutCompany = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation(logoutCompany, {
		onSuccess: (data: any) => {
			if (
				data.response &&
				data.response.status >= 400 &&
				data.response.status < 500
			) {
				throw new Error(data);
			}
			deleteCookie("rf-token");
			deleteCookie("ac-token");
			deleteCookie("username");
			Toast.success("Logout successful");
			router.push("/login");
			console.log(data);
		},
		onError: (error: any) => {
			Toast.error("Error: Could not logout please try again later");
			console.log(error);
		},
	});
};
