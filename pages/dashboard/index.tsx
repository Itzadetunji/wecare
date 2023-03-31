import BestCareStaffSection from "@/components/BestCareStaffSection";
import DashboardNavWrapper from "@/components/DashboardNavWrapper";
import OverviewCard from "@/components/OverviewCard";
import ReasonForRequestSection from "@/components/ReasonForRequestSection";
import SearchInput from "@/components/SearchInput";
import ServiceLevelPie from "@/components/ServiceLevelPie";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TicketSection from "@/components/TicketSection";

const Dashboard = () => {
	const [currentPage, setCurrentPage] = useState("Overview");
	const [searchValue, setSearchValue] = useState("");
	return (
		<DashboardNavWrapper
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		>
			<div className="">
				<section className="flex justify-end w-full">
					<div className="max-w-[304px]">
						<SearchInput
							value={searchValue}
							setValue={setSearchValue}
						/>
					</div>
				</section>
				{/* <AnimatePresence> */}
				{currentPage == "Overview" && (
					<motion.div
						// exit={{opacity: 0, scale:0.92}}
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.4 },
						}}
						className="mt-[80px]"
					>
						<section className="flex w-full gap-x-[120px]">
							<ServiceLevelPie percentage={76} target={75} />
							<div className="flex w-full gap-[62px]">
								<OverviewCard
									number={10175}
									text="Answered"
									percentage={57.2}
								/>
								<OverviewCard
									number={2055}
									text="Declined"
									percentage={14.5}
								/>
								<OverviewCard
									number={1575}
									text="Unanswered"
									percentage={10}
								/>
							</div>
						</section>
						<section className="w-full grid grid-cols-[auto_395px] mt-[77px] gap-[140px]">
							<ReasonForRequestSection />
							<BestCareStaffSection />
						</section>
					</motion.div>
				)}
				{currentPage == "Tickets" && (
					// <motion.div
					// 	initial={{ opacity: 0, scale: 0.92 }}
					// 	animate={{
					// 		opacity: 1,
					// 		scale: 1,
					// 		transition: { duration: 0.4 },
					// 	}}
					// 	className="mt-[80px] flex  justify-between"
					// >
					// 	<TicketSection />
					// 	<TicketSection />
					// 	<TicketSection />
					// </motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.4 },
						}}
						className="mt-[80px] flex gap-x-[57px]"
					>
						<TicketSection />
						{/* <ViewTicketSection /> */}
					</motion.div>
				)}
				{/* </AnimatePresence> */}
			</div>
		</DashboardNavWrapper>
	);
};

export default Dashboard;
