interface CareStaffProps {
	image: string;
	name: string;
	percentage: number;
}
const CareStaff: React.FC<CareStaffProps> = ({ image, name, percentage }) => {
	return (
		<div className="w-full flex gap-[15px] items-center">
			<img
				src="/images/Dashboard/personIm.png"
				className="w-[60px] h-[60px] object-cover rouded-full border border-[#D9D9D9]"
			/>
			<div className="text-[16px] items-center">
				<p className="text-[#324054] font-medium">{name}</p>
				<p className="text-[#324054] font-light text-[14px]">
					Customer Satisfaction: {percentage}%
				</p>
			</div>
		</div>
	);
};
export default CareStaff;
