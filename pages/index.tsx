import HeadTag from "./_head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<HeadTag />
			<main className="bg-black h-[100vh] w-full select-none flex justify-center">
				<div className="max-w-[1400px] w-full">
					<h1 className="text-white pt-10 pl-10 text-3xl text-left">
						Hadi.
					</h1>
				</div>
				<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-[30px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[96px] whitespace-nowrap font-black fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[inherit] overflow-hidden">
					Coming Soon!
				</h1>
			</main>
		</>
	);
};
export default Home;
