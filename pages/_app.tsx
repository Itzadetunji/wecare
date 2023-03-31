import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AppProps {
	Component: React.FC;
	pageProps: any;
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Head>
					<meta
						name="description"
						content="HadiFinance is a tech enable retail distribution platform that provides retailers with a convenient way to stock up their shops with products at the best prices possible and also have access to smart financial services such as Loans, Savings and insurance needed to run your day to day business."
					/>
					<meta
						name="keywords"
						content="Finance, Inventory, Retail distribution, Loans, Savings, Insurance"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
				</Head>
				<Component {...pageProps} />
				<ToastContainer />
			</QueryClientProvider>
		</>
	);
}
