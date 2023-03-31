import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

export const InitialMessage: React.FC = () => {
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
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className="px-5 py-4 flex flex-col gap-2 border-[0.5px] border-[#E5DCFF] rounded-[5px]"
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-duration="7000"
		>
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
