interface OverviewCardProps {
	number: number;
	text: string;
	percentage: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	number,
	text,
	percentage,
}) => {
	return (
		<div className="py-[29px] border-[0.2px] border-[#324054] px-[24px] rounded-[5px] w-full">
			<div className="flex items-center justify-between w-full">
				<div className="w-[45px] h-[45px] bg-[#552BCC] bg-opacity-[0.15] rounded-full flex items-center justify-center ">
					<svg
						width="18"
						height="21"
						viewBox="0 0 18 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 21V19H16V18H12V10H16V9C16 7.06667 15.3167 5.41667 13.95 4.05C12.5833 2.68333 10.9333 2 9 2C7.06667 2 5.41667 2.68333 4.05 4.05C2.68333 5.41667 2 7.06667 2 9V10H6V18H2C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V9C0 7.76667 0.237333 6.604 0.712 5.512C1.18733 4.42067 1.83333 3.46667 2.65 2.65C3.46667 1.83333 4.42067 1.18733 5.512 0.712C6.604 0.237333 7.76667 0 9 0C10.2333 0 11.396 0.237333 12.488 0.712C13.5793 1.18733 14.5333 1.83333 15.35 2.65C16.1667 3.46667 16.8127 4.42067 17.288 5.512C17.7627 6.604 18 7.76667 18 9V19C18 19.55 17.8043 20.021 17.413 20.413C17.021 20.8043 16.55 21 16 21H9ZM2 16H4V12H2V16ZM14 16H16V12H14V16Z"
							fill="#552BCC"
						/>
					</svg>
				</div>
				<div className="background-[#4ACE4F] bg-[#4ACE4F] text-[8px] h-[17px] rounded-[8.5px] bg-opacity-[0.15] w-[38px] flex items-center justify-center">
					{percentage}%
				</div>
			</div>
			<p className="mt-[19px]">{text}</p>
			<p className="text-[45px] font-semibold">
				{number.toLocaleString()}{" "}
			</p>
		</div>
	);
};

export default OverviewCard;
