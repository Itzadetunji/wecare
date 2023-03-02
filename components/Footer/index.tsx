import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Footer: NextPage = () => {
	return (
		<footer className="bg-[#30157A] mt-10 py-20 px-14">
			<div className="mx-auto flex flex-wrap items-center justify-between max-w-[1440px] items-center">
				<div className="">
					<figure className="w-36 h-8 relative cursor-pointer max-w-[340px] self-end">
						<Image
							src="/images/logo-long.png"
							alt="Back button"
							fill
							style={{ objectFit: "contain" }}
							className="cursor-pointer"
						/>
					</figure>
					<div className="flex flex-col gap-2.5 text-white mt-8">
						<a href="tel:+" className="text-xl font-medium">
							+234-806-8204-085
						</a>
						<a href="mailto:support@wecare.com">
							support@wecare.com
						</a>
					</div>
				</div>
				<div className="flex flex-col w-full text-white max-w-[376px] gap-7">
					<h4 className="text-lg">Quicks Links</h4>
					<div className="flex gap-5 justify-between flex-1">
						<ul className="flex flex-col gap-4">
							<Link
								href="/"
								className="cursor-pointer opacity-[0.65] hover:opacity-100 duration-300"
							>
								Solution
							</Link>
							<Link
								href="/"
								className="cursor-pointer opacity-[0.65] hover:opacity-100 duration-300"
							>
								Pricing
							</Link>
						</ul>
						<ul className="flex flex-col gap-4">
							<Link
								href="/"
								className="cursor-pointer opacity-[0.65] hover:opacity-100 duration-300"
							>
								Company
							</Link>
							<Link
								href="/"
								className="cursor-pointer opacity-[0.65] hover:opacity-100 duration-300"
							>
								Media
							</Link>
						</ul>
					</div>
				</div>
				<form
					action=""
					className="flex flex-col gap-10 text-lg"
					method="post"
					onSubmit={(e) => e.preventDefault()}
				>
					<h4 className="text-white text-lg">Subscribe</h4>
					<div className="flex items-center justify-between gap-10 h-[50px] rounded-md pl-4 bg-white">
						<input
							type="email"
							className="outline-none text-sm placeholder:text-sm placeholder:text-[#0A142F]"
							placeholder="Get product updates"
							required
						/>
						<button className="flex items-center justify-center bg-[#552BCC] h-[50px] w-[60px] rounded-r-md">
							<Image
								src="/images/arrow.svg"
								alt="Back button"
								width={13}
								height={18}
								className="cursor-pointer"
							/>
						</button>
					</div>
				</form>
			</div>
			<hr className="px-14 mx-auto opacity-20 mt-16 max-w-[1440px]" />
			<div className="flex justify-between max-w-[1440px]">
				<div>
					<figure>
						<Image
							src="/images/arrow.svg"
							alt="Back button"
							width={13}
							height={18}
							className="cursor-pointer"
						/>
					</figure>
				</div>
				<p className="text-white">
					&copy; 2023 WeCare. All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
