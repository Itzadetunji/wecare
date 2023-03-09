interface OpenMailItemProps {
	iconPath: string;
	text: string;
}

const OpenMailItem: React.FC<OpenMailItemProps> = ({ iconPath, text }) => {
	return (
		<div className="w-full h-[60px] items-center flex justify-center gap-[12px] border-[0.5px] border-[#C2C2C2] rounded-[5px]">
			<img src={iconPath} />
			<p className="font-semibold">{text}</p>
		</div>
	);
};

export default OpenMailItem;
