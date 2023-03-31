import { getCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

interface MyProviderProps {
	children: React.ReactNode;
}

interface MyContextValues {
	auth: string | null;
	setAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

export const MyContext = createContext<MyContextValues>({} as MyContextValues);

export const MyProvider = ({ children }: MyProviderProps) => {
	const router = useRouter();
	const [auth, setAuth] = useState<string | null>(null);

	const excludedPaths = [
		"/login",
		"/forgot",
		"/reset",
		"/register",
		"/",
		"/search",
		"/user-1",
		"/user-2",
		"/user-3",
	];
	useEffect(() => {
		setAuth(getCookie("bearer"));
		if (
			!excludedPaths.includes(router.pathname) &&
			getCookie("bearer") === null
		) {
			router.push("/login");
		}
	}, [router.pathname, router]);

	useEffect(() => {
		setAuth(getCookie("bearer"));
		if (
			!excludedPaths.includes(router.pathname) &&
			getCookie("bearer") === null
		) {
			router.push("/login");
		}
	}, []);

	return (
		<MyContext.Provider
			value={{
				auth,
				setAuth,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
