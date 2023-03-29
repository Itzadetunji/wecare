import { motion } from "framer-motion";
import { useState } from "react";

interface ReasonStatisticVisualisationProps {
	percentage: number;
	reasonText: string;
	color: string;
}

const ReasonStatisticVisualisation: React.FC<
	ReasonStatisticVisualisationProps
> = ({ percentage, reasonText, color }) => {
	return (
		<div>
			<div className="w-full h-[49px] border-[0.5px] border-[#71839B] py-[8.5px] px-[13px]">
				<motion.div
					style={{ backgroundColor: color }}
					initial={{ width: "0%" }}
					animate={{
						width: `${percentage}%`,
						transition: { duration: 1.5 },
					}}
					className="h-full"
				></motion.div>
			</div>
			<div className="mt-[15px] flex justify-between">
				<p className="font-medium">{reasonText}</p>
				<p>{percentage}%</p>
			</div>
		</div>
	);
};

export default ReasonStatisticVisualisation;
