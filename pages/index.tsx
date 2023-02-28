import Image from "next/image";
import { Inter } from "@next/font/google";
import type { NextPage } from "next";
import HeroText from "@/components/HeroText";

const Home: NextPage = () => {
	return (
		<main>
			<HeroText />
		</main>
	);
};
export default Home;
