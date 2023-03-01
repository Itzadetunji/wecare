import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

interface OurServicesCardProps {
	title: string;
	desc: React.ReactNode;
	img: number;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({
	title,
	desc,
	img,
}) => {
	return (
		<div
			className={`flex justify-between items-center gap-10 rounded-[10px] ${
				img === 1 && "bg-[#FFF7F1]"
			} ${img === 2 && "bg-[#F1F5FF]"} ${img === 3 && "bg-[#FBF1FF]"}`}
		>
			<div className="pl-14 max-w-[650px] py-10">
				<div className="">
					<h1 className="text-3xl mb-4 font-bold">{title}</h1>
					{desc}
				</div>
				<button className="flex items-center justify-center h-12 w-44 bg-[#30157A] text-white rounded-[10px] mt-11 select-none">
					Get Wecare ---
				</button>
			</div>
			<div className="w-[70%] h-[300px] relative cursor-pointer max-w-[340px] self-end">
				<Image
					src={`/images/our-services/${img}.png`}
					alt="Back button"
					fill
					style={{ objectFit: "contain" }}
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default OurServicesCard;
