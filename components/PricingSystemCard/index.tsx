interface PricingSystemCardProps {
	description: string;
	imagePath: string;
}

const PricingSystemCard: React.FC<PricingSystemCardProps> = ({
	description,
	imagePath,
}) => {
	return (
		<div className="w-full relative">
			<img className="w-[297px]" src={imagePath} />
			<p className="absolute bottom-[20px] lg:bottom-[20px] xl:bottom-[25px] 2xl:bottom-[36px] left-[20px] font-extrabold text-white text-[27px] xl:text-[27px] 2xl:text-[33px]">
				{description}
			</p>
		</div>
	);
};

export default PricingSystemCard;
