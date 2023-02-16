import Head from "next/head";

export const HeadTag = () => {
	return (
		<Head>
			<title>Hadi Finance</title>
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
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default HeadTag;
