const HeroText = () => {
	return (
		<section className="mt-[238px]">
			<header className="flex justify-center">
				<h1 className="text-[40px] font-bold montserratAlternatesFont leading-[49px]">
					Simplify your{" "}
					<span className="font-black text-[#552BCC]">
						customer care
					</span>{" "}
					<br /> &{" "}
					<span className="font-black text-[#552BCC]">
						communication
					</span>{" "}
					for your business
				</h1>
			</header>
			<article>
				<p className="text-[18px] max-w-[1240px] text-center mx-auto mt-[48px]">
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
