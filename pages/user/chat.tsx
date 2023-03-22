import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Chat: NextPage = () => {
	return (
		<>
			<section className="flex-1 self-stretch overflow-scroll mx-8 mb-48 mt-5">
				<InitialMessage />
			</section>
			<section className="w-full px-8 fixed bottom-0 bg-white">
				<form
					method="post"
					className="w-full flex flex-col gap-1.5 justify-between px-5 py-4 h-32 bg-[#F5F1FF] mb-10"
				>
					<textarea
						name=""
						id=""
						className="bg-[#F5F1FF] w-full text-sm placeholder:text-[#324054] flex-1 outline-none resize-none"
						placeholder="Write your response to"
					/>
					<div className="flex gap-3 montserratAlternatesFont self-end">
						<button className="bg-white flex items-center gap-0.5 w-fit px-2.5 py-2 rounded-[5px]">
							<Image
								src={"/icons/attatch-file.svg"}
								alt={""}
								width={16}
								height={15}
							/>
							<p className="text-xs text-[#1D0E4A] font-semibold">
								Attach Files
							</p>
						</button>
						<button className="px-5 py-2 text-sm font-semibold text-white bg-[#552BCC] rounded-[5px]">
							Send
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Chat;

const InitialMessage: React.FC = () => {
	const actions = [
		"Account Opening",
		"Account Reactivation",
		"Account Restriction",
		"Balance Enquiry",
		"Money Transfer",
		"Airtime",
		"Data Purchase",
		"Bills Payment",
		"Block Card",
		"Account Statement",
		"Log Complaints",
		"ATM/Branch Locator",
		"Agent Locator",
		"Reset PIN",
		"Loan Request",
	];
	const alphabets = (capital = false) => {
		return [...Array(26)].map((_, i) =>
			String.fromCharCode(i + (capital ? 65 : 97))
		);
	};
	return (
		<div className="px-5 py-4 flex flex-col gap-2 border-[0.5px] border-[#E5DCFF] rounded-[5px]">
			<figure className="flex gap-1 items-center">
				<Image
					src={"/images/gtbank.jpg"}
					alt={""}
					width={25}
					height={25}
					className="rounded-full"
				/>
				<figcaption className="font-medium text-xs">GTBank</figcaption>
			</figure>
			<div className="text-xs text-[#324054]">
				<p>
					Hello and welcome James. I&apos;m Caris from GTBank; I can
					assist with your transactions and inquiries. What would you
					like to begin with?
				</p>
				<br />
				<div>
					{actions.map((q, i) => (
						<div key={i} className="flex flex-row">
							<p>*{alphabets()[i].toUpperCase()}.*</p>
							<p>{q}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
