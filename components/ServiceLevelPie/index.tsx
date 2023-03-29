import { useEffect, useState } from "react";
import { useCountUp } from 'use-count-up'

interface ServiceLevelPieProps {
	percentage: number;
	target: number;
}

const ServiceLevelPie: React.FC<ServiceLevelPieProps> = ({
	percentage,
	target,
}) => {
    const { value } = useCountUp({
        isCounting: true,
        end: percentage,
        duration: 1.5,
      })

	return (
		<div className="w-[204px] h-[204px] relative">
			<div
				style={{
					background: `conic-gradient(#30B19A ${value}%, transparent 0)`,
					transform: `rotateY(180deg)`,
				}}
				className=" absolute w-[204px] h-[204px] flex justify-center items-center rounded-full z-10 transition duration-[500ms]"
			></div>
			<div className=" absolute left-[3.5px] top-[3.5px] w-[197px] h-[197px] border-[2px] rounded-full border-[#C8D2E0]"></div>
			<div className="w-[188px] h-[188px] bg-white z-30 absolute rounded-full left-[8px] top-[8px] text-center flex flex-col gap-[20px] items-center justify-center">
				<p className="text-[12px]">Service Level</p>
				<p className="text-[40px]">{percentage}%</p>
				<p className="text-[12px]">{target}%</p>
			</div>
		</div>
	);
};

export default ServiceLevelPie;
