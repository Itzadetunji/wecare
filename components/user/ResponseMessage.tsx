import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

interface ResponseMessageProps {
	text: string;
}

export const ResponseMessage: React.FC<ResponseMessageProps> = ({ text }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className="px-5 py-4 flex flex-col gap-2 border-[0.5px] border-[#E5DCFF] rounded-[5px] ml-auto w-[80%] bg-green-100"
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-duration="7000"
		>
			<figure className="flex gap-1 items-center">
				<figcaption className="font-medium text-xs">
					Adetunji Adeyinka
				</figcaption>
			</figure>
			<div className="text-xs text-[#324054]">
				<div>{text}</div>
			</div>
		</div>
	);
};
