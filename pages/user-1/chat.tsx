import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { InitialMessage } from "@/components/user/InitialMessage";
import { BotMessage } from "@/components/user/BotMessage";
import { ResponseMessage } from "@/components/user/ResponseMessage";

const Chat: NextPage = () => {
	return (
		<>
			<section className="flex-1 self-stretch overflow-y-hidden mx-8 mb-48 mt-5 flex flex-col gap-4">
				<InitialMessage />
				<ResponseMessage
					text={"Hi, can you help me open a new bank account?"}
				/>
				<BotMessage
					text={
						"We will need your full name, date of birth, email address, phone number, and residential address. Do you have all of that information ready?"
					}
				/>
				<ResponseMessage text={"Yes, I do."} />
				<BotMessage
					text={
						"Great! Can you please provide your full name and date of birth?"
					}
				/>
				<ResponseMessage
					text={
						" My name is John Doe and my date of birth is January 1st, 1990."
					}
				/>
				<BotMessage
					text={
						"Thank you, John. Can you also provide your email address and phone number?"
					}
				/>
				<ResponseMessage
					text={
						"My email is johndoe@email.com and my phone number is 123-456-7890."
					}
				/>
				<BotMessage
					text={
						"Thank you. Lastly, can you provide your residential address?"
					}
				/>
				<ResponseMessage
					text={"Sure, it's 123 Main St, Anytown, USA."}
				/>
				<BotMessage
					text={
						"Excellent, thank you for that information, John. We'll need to verify your identity and may need additional information from you. You will receive an email from us when your account has been created. Is there anything else you'd like to know about opening an account with us?"
					}
				/>
			</section>
			<section className="w-full px-8 fixed bottom-0 bg-white">
				<form
					method="post"
					className="w-full flex flex-col gap-1.5 justify-between px-5 py-4 h-32 bg-[#F5F1FF] mb-10"
				>
					<textarea
						name=""
						id=""
						className="bg-[#F5F1FF] w-full text-sm placeholder:text-[#324054] flex-1 outline-none resize-none"
						placeholder="Write your response to"
					/>
					<div className="flex gap-3 montserratAlternatesFont self-end">
						<button className="bg-white flex items-center gap-0.5 w-fit px-2.5 py-2 rounded-[5px]">
							<Image
								src={"/icons/attatch-file.svg"}
								alt={""}
								width={16}
								height={15}
							/>
							<p className="text-xs text-[#1D0E4A] font-semibold">
								Attach Files
							</p>
						</button>
						<button className="px-5 py-2 text-sm font-semibold text-white bg-[#552BCC] rounded-[5px]">
							Send
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Chat;
