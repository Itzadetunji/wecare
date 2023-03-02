import PricingSystemCard from "../PricingSystemCard";

const PricingSystem = () => {
	return (
		<section className="w-full px-[30px] sm:px-14 xl:px-28 mx-auto">
			<div className="flex justify-between flex-col xl:flex-row gap-[40px] sm:gap-[60px]">
				<header className="">
					<h1 className="text-[28px] sm:text-[36px] text-center xl:text-left font-black leading-[44px] text-[#552BCC]">
						Pricing <br className="hidden xl:block" /> System
					</h1>
				</header>
				<div className="grid max-w-[634px] lg:max-w-none mx-auto grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[40px]">
					<PricingSystemCard
						description="Freemium"
						imagePath="/images/PricingSystem/freemiumImage.png"
					/>
					<PricingSystemCard
						description="Business"
						imagePath="/images/PricingSystem/businessImage.png"
					/>
					<PricingSystemCard
						description="Education"
						imagePath="/images/PricingSystem/educationImage.png"
					/>
					<PricingSystemCard
						description="Govt"
						imagePath="/images/PricingSystem/govtImage.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default PricingSystem;
