import CareStaff from "./CareStaff";

const BestCareStaffSection = () => {
	const customerSatisfactionData = [
		{
			image: "/images/Dashboard/personIm.png",
			name: "Wesley Huston",
			percentage: 95.6,
		},
		{
			image: "/images/Dashboard/personIm.png",
			name: "Wesley Huston",
			percentage: 95.6,
		},
		{
			image: "/images/Dashboard/personIm.png",
			name: "Wesley Huston",
			percentage: 95.6,
		},
		{
			image: "/images/Dashboard/personIm.png",
			name: "Wesley Huston",
			percentage: 95.6,
		},
		{
			image: "/images/Dashboard/personIm.png",
			name: "Wesley Huston",
			percentage: 95.6,
		},
	];
	return (
		<section className="w-full border-x-[0.2px] border-t-[0.2px] border-[#324054] pt-[51px] pb-[53px] rounded-t-[5px] px-[57px]">
			<p className="text-[22px] font-medium mb-[42px]">Best Care Staff</p>
			<div className="flex flex-col gap-[32px]">
				{customerSatisfactionData.map((item, index) => (
					<CareStaff
						key={index}
						image={item.image}
						name={item.name}
						percentage={item.percentage}
					/>
				))}
			</div>
		</section>
	);
};
export default BestCareStaffSection;
