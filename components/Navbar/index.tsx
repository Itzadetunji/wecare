import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
	const router = useRouter();
	return (
		<nav className="mx-auto px-8 xl:px-28 py-5 flex items-center justify-between max-w-[1440px]">
			<figure className="w-[50px] h-[50px] relative cursor-pointer max-w-[340px] self-end">
				<Image
					src={`/images/logo.png`}
					alt="Back button"
					fill
					style={{ objectFit: "contain" }}
					className="cursor-pointer"
				/>
			</figure>
			<ul className="flex gap-5 lg:gap-10 xl:gap-20 text-[#1E1E1E] select-none">
				<li className="cursor-pointer hover:text-[#30157A] duration-300">
					Home
				</li>
				<li className="cursor-pointer hover:text-[#30157A] duration-300">
					Solution
				</li>
				<li className="cursor-pointer hover:text-[#30157A] duration-300">
					Pricing
				</li>
				<li className="cursor-pointer hover:text-[#30157A] duration-300">
					About
				</li>
				<li className="cursor-pointer hover:text-[#30157A] duration-300">
					Contact
				</li>
			</ul>
			<button
				onClick={() => router.push("/login")}
				className="flex items-center justify-center bg-[#30157A] text-white text-sm h-11 w-40 lg:w-48 rounded-[10px]"
			>
				Become a client
			</button>
		</nav>
	);
};

export default Navbar;
