const UserDetails = () => {
	return (
		<div className="w-full pl-[12px] flex gap-[7px] ">
			<img
				src="/images/Dashboard/personIm.png"
				className="w-[40px] h-[40px] object-cover rouded-full border border-[#D9D9D9]"
			/>
			<div className="text-[12px] items-center">
				<p className="text-[#324054]">Ronald Dosunmu</p>
				<p className="text-[#71839B]">support@gtbank.com</p>
			</div>
		</div>
	);
};

export default UserDetails;
