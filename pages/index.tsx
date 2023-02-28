import Image from "next/image";
import { Inter } from "@next/font/google";
import type { NextPage } from "next";
import HeroText from "@/components/HeroText";
import HeroImage from "@/components/HeroImage";

const Home: NextPage = () => {
	return (
		<main>
			<section className="bg-[#FDFAFF]">
			<HeroText />
			<HeroImage />

			</section>
		</main>
	);
};
export default Home;
