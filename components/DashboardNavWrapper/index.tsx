import { Dispatch, SetStateAction } from "react";
import UserDetails from "../UserDetails";
import DashboardNavItem from "./DashboardNavItem";

interface DashboardNavWrapperProps {
	children: JSX.Element;
	currentPage: string;
	setCurrentPage: Dispatch<SetStateAction<string>>;
}

const DashboardNavWrapper: React.FC<DashboardNavWrapperProps> = ({
	children,
	currentPage,
	setCurrentPage,
}) => {
	return (
		<main className="w-full h-screen grid grid-cols-[322px_auto]">
			<nav className="flex flex-col w-full h-full border-[#324054] border-r-[0.2px] border-opacity-60 pl-[26px] pr-[41px] pt-[51px]">
				<div className="flex items-center gap-x-[12px] mb-[40px]">
					<img
						className="rounded-[5px]"
						src="/images/Dashboard/gtlogo.png"
					/>
					<p className="text-[24px] font-semibold">GTBank</p>
				</div>
				<section className="flex flex-col justify-between h-full">
					<div className="flex flex-col gap-[16px]">
						<DashboardNavItem
							setCurrentPage={setCurrentPage}
							name="Overview"
							selected={currentPage == "Overview"}
						/>
						<DashboardNavItem
							setCurrentPage={setCurrentPage}
							name="Tickets"
                            selected={currentPage == "Tickets"}
                            numberCount={10}
						/>
						<DashboardNavItem
							setCurrentPage={setCurrentPage}
							name="Messages"
                            selected={currentPage == "Messages"}
                            numberCount={2}
						/>
						<DashboardNavItem
							setCurrentPage={setCurrentPage}
							name="Analytics"
							selected={currentPage == "Analytics"}
						/>
						<DashboardNavItem
							setCurrentPage={setCurrentPage}
							name="History"
							selected={currentPage == "History"}
						/>
					</div>
					<div className="pb-[35px] flex flex-col gap-[30px]">
						<div>
							<DashboardNavItem
								name="Notifications"
                                setCurrentPage={setCurrentPage}
                                selected={false}
                                numberCount={5}
							/>
							<DashboardNavItem
								name="Settings"
                                setCurrentPage={setCurrentPage}
                                selected={false}
							/>
							<DashboardNavItem
								name="Logout"
                                setCurrentPage={setCurrentPage}
                                selected={false}
							/>
						</div>
						<UserDetails />
					</div>
				</section>
            </nav>
            <section className="pt-[55px] px-[50px] max-h-screen overflow-auto">
                {children}
            </section>
		</main>
	);
};

export default DashboardNavWrapper;
