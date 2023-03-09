import { ReactNode } from "react";

interface AuthenticationWrapperProps {
	children: ReactNode;
}

const AuthenticationPageWrapper: React.FC<AuthenticationWrapperProps> = ({
	children,
}) => {
	return (
		<main className="w-full min-h-screen lg:h-screen lg:overflow-hidden flex  lg:grid lg:grid-cols-2">
			<section className="w-full h-screen hidden lg:block relative">
				<img
					className="w-full h-full object-cover"
					src="/images/AuthenticationPages/AuthenticationPageImage.jpg"
				/>
				<div className="w-full px-[30px] xl:px-[71px] absolute bottom-[10%]">
					<p className="bg-[#552BCC] bg-opacity-[0.25] px-[63px] pt-[39px] pb-[26px] text-white montserratFont rounded-[5px]">
						If you want to deliver positively outrageous service,
						keeping your customers connected to you is critical.
						Your ability to engage, guide and satisfy your customers
						is integral to your success as a leader. Great service
						starts with how you build relationships and earn trust -
						that’s the basis of gaining and maintaining successful
						connections with your customers.
						<img
							className="mt-[24px]"
							src="/images/AuthenticationPages/googleIcon.png"
						/>
					</p>
				</div>
			</section>
			<section className="px-[35px] lg:px-[70px] xl:px-[130px] flex flex-col justify-center w-full py-[40px] max-w-[600px] mx-auto lg:max-w-none lg:mx-none">
				{children}
			</section>
		</main>
	);
};

export default AuthenticationPageWrapper;
