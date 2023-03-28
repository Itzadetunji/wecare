import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
	baseURL: "https://127.0.0.1:4000/api",
	headers: {
		Accept: "application/json",
		// Authorization:
		// 	"Authorization: Api-Key EMf0lDuH.Mz1Pljd5drzy4kFpqIIjKP1byYPDOWN1",
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
