import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
	baseURL: "https://wecare-xuqd.onrender.com/api",
	headers: {
		Accept: "application/json",
	},
});

export const request = ({
	...options
}: AxiosRequestConfig): Promise<AxiosResponse> => {
	const onSuccess = (response: AxiosResponse) => response;
	const onError = (error: any) => {
		return error;
	};

	return client(options).then(onSuccess).catch(onError);
};
