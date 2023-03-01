import type { NextPage } from "next";
import React from "react";

const OurServices: NextPage = () => {
	return (
		<section className="flex flex-col justify-between mx-28">
			<div className="flex justify-between">
				<p className="text-[#552BCC] text-[40px] font-black">
					Attend to your <br /> customers enquiry with ease.
				</p>
				<div className="flex items-center justify-center bg-purple-100 w-24 h-24 rounded-full text-[50px] select-none">
					🤝
				</div>
			</div>
		</section>
	);
};

export default OurServices;
