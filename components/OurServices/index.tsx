import type { NextPage } from "next";
import React from "react";
import OurServicesCard from "../OurServicesCard";

const OurServices: NextPage = () => {
	return (
		<section className="flex flex-col px-4 lg:px-28 mx-auto max-w-[1440px]">
			<div className="flex justify-between">
				<p className="text-[#552BCC] text-[40px] font-black">
					Attend to your <br /> customers enquiry with ease.
				</p>
				<div className="flex items-center justify-center bg-purple-100 w-24 h-24 rounded-full text-[50px] select-none">
					🤝
				</div>
			</div>
			<div className="flex flex-col gap-24 mt-44">
				<OurServicesCard
					title={"Streamlines workflow"}
					desc={
						<p>
							Wecare can handle routine questions for you.
							Chatbots keep track of client behavior and can
							respond to commonly asked queries, aid with
							recovering abandoned carts, provide support with the
							checkout process, and more. <br /> <br /> A chatbot
							may simply transfer a consumer to a human agent even
							if it is unable to resolve the issue.
						</p>
					}
					img={1}
				/>
				<OurServicesCard
					title={"Stellar Customer Service"}
					desc={
						<p>
							Customer support bots are learning incredibly
							quickly because of advances in artificial
							intelligence. <br /> <br />
							Better customer service may be provided as a
							consequence of an AI bot that can gather pertinent
							information about clients and increase their
							pleasure. Fast response times, availability
							around-the-clock.
						</p>
					}
					img={2}
				/>
				<OurServicesCard
					title={"Prevent Employee Burnout"}
					desc={
						<p>
							Account managers must occasionally leave their
							desks. It is expensive to cover each hour with too
							many employees working in shifts. <br /> <br /> On
							the other side, a team that is understaffed may
							experience weariness, burnout, and other issues. So
							what is the best course of action? Wecare can
							continually help human employees and take their
							place as needed
						</p>
					}
					img={3}
				/>
			</div>
		</section>
	);
};

export default OurServices;
