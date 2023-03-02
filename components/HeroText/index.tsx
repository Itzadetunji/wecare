const HeroText = () => {
	return (
		<section className="pt-[150px] px-[30px]">
			<header className="flex justify-center">
				<h1 className="max-w-[400px] sm:max-w-none text-[24px] lg:text-[32px] xl:text-[40px] font-bold montserratAlternatesFont leading-[30px] lg:leading-[40px]  xl:leading-[49px]  text-center lg:text-left">
					Simplify your{" "}
					<span className="font-black text-[#552BCC]">
						customer care
					</span>{" "}
					<br className="hidden sm:block" /> &{" "}
					<span className="font-black text-[#552BCC]">
						communication
					</span>{" "}
					for your business
				</h1>
			</header>
			<article>
				<p className="text-[14px] lg:text-[16px] xl:text-[18px] max-w-[1240px] text-center mx-auto mt-[30px] lg:mt-[38px] xl:mt-[48px]">
					WeCare is your friendly customer support for your business.
					Call centers are constantly under pressure to clear backlogs
					while offering assistance simultaneously. Chatbots, virtual
					assistants, and other AI-powered interfaces take off the
					burden by addressing typical user queries and issues. This
					enables the customer support representatives to have more
					time to resolve complicated issues.
				</p>
			</article>
		</section>
	);
};
export default HeroText;
