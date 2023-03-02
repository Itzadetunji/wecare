import Image from "next/image";
import { Inter } from "@next/font/google";
import type { NextPage } from "next";
import HeroText from "@/components/HeroText";
import HeroImage from "@/components/HeroImage";
import PricingSystem from "@/components/PricingSystem";
import OurServices from "@/components/OurServices";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
	return (
		<main>
			<Navbar />
			<section className="bg-[#FDFAFF]">
				<HeroText />
				<HeroImage />
			</section>
			<OurServices />
			<PricingSystem />
			<Footer />
		</main>
	);
};
export default Home;
