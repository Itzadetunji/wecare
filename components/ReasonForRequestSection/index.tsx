import ReasonStatisticVisualisation from "./ReasonStatisticVisualisation";

const ReasonForRequestSection = () => {
	const reasonStatisticsData = [
		{
			reason: "Product / Service problems",
			percentage: 45,
			color: "#4187A5",
		},
		{
			reason: "Technical issues",
			percentage: 8,
			color: "#A56541",
		},
		{
			reason: "Card Transactions",
			percentage: 12,
			color: "#6D41A5",
		},
		{
			reason: "Payment issues",
			percentage: 20,
			color: "#A5419B",
		},
	];
	return (
		<section className="w-full border-x-[0.2px] border-t-[0.2px] border-[#324054] pt-[51px] pb-[53px] rounded-t-[5px] px-[57px]">
			<p className="text-[22px] font-medium mb-[42px]">
				Reason For Request
			</p>
			<div className="flex flex-col w-full gap-[46px]">
				{reasonStatisticsData.map((item) => (
					<ReasonStatisticVisualisation
						reasonText={item.reason}
						percentage={item.percentage}
						color={item.color}
					/>
				))}
			</div>
		</section>
	);
};

export default ReasonForRequestSection;
