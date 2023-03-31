import React, { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { InitialMessage } from "@/components/user/InitialMessage";
import { BotMessage } from "@/components/user/BotMessage";
import { ResponseMessage } from "@/components/user/ResponseMessage";

const Chat: NextPage = () => {
	const data = [
		{
			user: "My account has been restricted. What should I do?",
			chatbot:
				"I'm sorry to hear that. Please provide your account details so we can look into the matter and resolve it for you.",
		},
		{
			user: "Okay, my name is Adetunji Adeyinka and my account number is 0366386496. I'm not sure why my account has been restricted, though. Can you help me figure it out?",
			chatbot:
				"Sure, John. Let me check your account status first. Can you please confirm your email address and phone number associated with your account?",
		},
		{
			user: "My email is adetunjiadeyinka29@gmail.com and my phone number is 07086401433.",
			chatbot:
				"Thank you, John. According to our records, your account has been restricted due to an issue with a recent transaction. Do you recall any unusual activity on your account recently?",
		},
		{
			user: "Actually, now that you mention it, I did receive an email about a suspicious transaction a few days ago. I didn't think much of it at the time, but maybe that's related to the account restriction?",
			chatbot:
				"That could be the reason, Adetunji. Can you provide me with more information about that transaction? For example, the date and amount of the transaction, the name of the merchant, or any other details you might remember?",
		},
		{
			user: "I got an email that says a transaction of 2 million  naira was made on March 23rd at a store called 'CST Buttery'. But I didn't make that transaction, it must have been fraud!",
			chatbot:
				"I'm sorry to hear that, Adetunji. It does sound like someone has fraudulently used your account. In that case, we will need to take some steps to secure your account and investigate the fraud. Can you please provide me with some more information, such as the address on your account and the last four digits of your NIN?",
		},
		{
			user: "Sure, my address is 4, Joseph Adesanya Street, and the last four digits of my social are 1234.",
			chatbot:
				"Thank you, Adetunji. We will take the necessary steps to secure your account and investigate the fraud. I will also connect you with our fraud department so they can provide further assistance. Is there anything else I can help you with at this time?",
		},
		{
			user: "No, that's all for now. Thank you for your help!",
			chatbot:
				"You're welcome, Adetunji. We apologize for any inconvenience this may have caused you, and we will do our best to resolve the issue as soon as possible.",
		},
	];
	const [message, setMessage] = useState("");
	return (
		<>
			<section className="flex-1 self-stretch overflow-y-hidden mx-8 mb-48 mt-5 flex flex-col gap-4">
				<InitialMessage />
				{data.map((i, index) => (
					<ResponseMessage
						key={index}
						user={i.user}
						chatbot={i.chatbot}
					/>
				))}
			</section>
			<section className="w-full px-8 fixed bottom-0 bg-white">
				<form
					method="post"
					className="w-full flex flex-col gap-1.5 justify-between px-5 py-4 h-32 bg-[#F5F1FF] mb-10"
					onSubmit={() => {
						Toast.info("This conversation has ended");
						setMessage("");
					}}
				>
					<textarea
						name=""
						id=""
						className="bg-[#F5F1FF] w-full text-sm placeholder:text-[#324054] flex-1 outline-none resize-none"
						placeholder="Write your response to"
						value={message}
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement>
						) => {
							setMessage(e.target.value);
						}}
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
						<button
							className="px-5 py-2 text-sm font-semibold text-white bg-[#552BCC] rounded-[5px]"
							onClick={(e) => {
								e.preventDefault();
								Toast.info("This conversation has ended");
								setMessage("");
							}}
						>
							Send
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Chat;
