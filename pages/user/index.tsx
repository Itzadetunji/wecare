import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import Chat from "./chat";

const User: NextPage = () => {
	const [state, setState] = useState<number>(1);
	return (
		<>
			<main className="flex flex-col justify-between mx-8 h-full">
				<header className="flex justify-between w-full pt-20">
					<div className="flex flex-col gap-3">
						<figure className="flex items-center gap-4">
							<Image
								src={`/images/gtbank.jpg`}
								alt="Back button"
								width={40}
								height={40}
								className="cursor-pointer"
							/>
							<figcaption>
								<p className="font-semibold">
									Customer Support
								</p>
							</figcaption>
						</figure>
						<figure className="flex flex-row items-center gap-1">
							<figcaption className="text-sm font-light italic">
								Powered by
							</figcaption>
							<Image
								src={`/images/logo-long-color.svg`}
								alt="Back button"
								width={50}
								height={10}
								className="cursor-pointer"
							/>
						</figure>
					</div>
					<figure className="py-1.5 px-1.5 bg-[#EAECF0] w-fit h-fit rounded-[4px]">
						<Image
							src={`/icons/close.svg`}
							alt="Close"
							width={11}
							height={11}
							className="cursor-pointer"
						/>
					</figure>
				</header>
				{state === 1 && (
					<>
						<section className="pb-20">
							<figure className="w-32 h-36 relative cursor-pointer">
								<Image
									src={`/images/ai-robot.svg`}
									alt="Back button"
									fill
									style={{ objectFit: "contain" }}
									className="cursor-pointer"
								/>
							</figure>
							<div className="mt-6 text-sm text-[#324054] leading-6">
								<p>
									Welcome to GTBank customer support
									Assistant!. I am here to assist you with any
									questions or concerns you may have about our
									products and services.
								</p>
								<br />
								<p>
									As your assistant, I am equipped with the
									latest technology and information to provide
									you with accurate and efficient support.
									Whether you need assistance with account
									management, transactions, or anything else
									related to our financial technologies, I am
									here to help. Thank you for choosing us as
									your financial partner and I look forward to
									assisting you.
								</p>
							</div>
						</section>
						<button
							className="h-14 min-h-[56px] w-full bg-[#552BCC] text-white text-xl font-semibold rounded-[5px]"
							onClick={() => setState(2)}
						>
							Start Chat
						</button>
					</>
				)}
			</main>
			{state === 2 && <Chat />}
		</>
	);
};

export default User;
