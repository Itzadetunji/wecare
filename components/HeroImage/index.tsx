const HeroImage = () => {
	return (
		<section className="max-w-[1240px] mx-auto mt-[90px] flex justify-between gap-[40px] pb-[135px]">
			<figure>
				<img
					className="min-w-[419px] z-20 relative"
					src="/images/customer-care-representative.webp"
				/>
			</figure>
			<div className="w-full pt-[10px]">
				<div className="flex relative pl-[20px] pr-[40px] pt-[24px] pb-[32px] border-[1px] border-[#E5DCFF] rounded-[5px] gap-[12px] mb-[49px]">
					<img
						className="absolute -left-[214px] top-[60px] z-10"
						src="/images/arrow1.svg"
					/>

					<figure>
						<img src="/images/user1.png" />
					</figure>
					<article className="text-[10px]">
						<p className="mb-[13px] mt-[5px] font-bold nowa">
							James Anderson
						</p>
						<p>
							Good morning, <br /> I would like to obtain all the
							statements of my transaction with your bank for the
							last 3 years, as it is needed to process my Visa at
							the Americam Embassy.
							<br /> Please I would appreciate if it is done
							speedily, Thank you. {"  "}
							<span>
								<img
									className="inline"
									src="/images/doubletick.svg"
								/>
							</span>
						</p>
					</article>
				</div>
				<div className="flex relative pl-[29px] pr-[40px] pt-[24px] pb-[32px] border-[1px] border-[#552BCC] rounded-[5px] gap-[12px]">
					<img
						src="/images/arrow2.svg"
						className="absolute -left-[244px] top-[40px] z-10"
					/>

					<figure>
						<img src="/images/user2.png" />
					</figure>
					<article className="text-[10px]">
						<p className="mb-[13px] mt-[5px] font-bold">
							Kuda Bank
						</p>
						<p>
							Good morning, <br /> Please find attached your
							transaction statement from 2020 till 2022. I believe
							that this would be useful in your visa application.
							We wish you all the best.
							<br /> Have a blessed day. {"  "}
							<span>
								<img
									className="inline"
									src="/images/doubletick.svg"
								/>
							</span>
						</p>
						<div className="flex gap-[20px] mt-[19px]">
							<div className="flex gap-[3px] items-center text-[8px] py-[9px] px-[29px] bg-[#F5F1FF] text-[#1D0E4A] rounded-[5px]">
								<img src="/images/briefIcon.svg" />
								Brief 2020
							</div>
							<div className="flex gap-[3px] items-center text-[8px] py-[9px] px-[29px] bg-[#F5F1FF] text-[#1D0E4A] rounded-[5px]">
								<img src="/images/briefIcon.svg" />
								Brief 2021
							</div>
							<div className="flex gap-[3px] items-center text-[8px] py-[9px] px-[29px] bg-[#F5F1FF] text-[#1D0E4A] rounded-[5px]">
								<img src="/images/briefIcon.svg" />
								Brief 2022
							</div>
							<p className="underline flex items-center justify-center cursor-pointer">
								Donwload all
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
export default HeroImage;
