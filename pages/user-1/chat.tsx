import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { InitialMessage } from "@/components/user/InitialMessage";
import { BotMessage } from "@/components/user/BotMessage";
import { ResponseMessage } from "@/components/user/ResponseMessage";

const Chat: NextPage = () => {
	const data = [
		{
			user: "I lost my debit card. What should I do?",
			chatbot:
				"We're sorry to hear that. Please block your card immediately by sending a message to our customer service, and we'll help you get a new card.",
		},
		{
			user: "Okay, how do I send a message to customer service?",
			chatbot:
				"You can either send an email to our customer service team or contact us through our online chat service. Would you like me to provide you with the email address or the link to our online chat?",
		},
		{
			user: "Can you please give me the email address?",
			chatbot:
				"Sure thing, the email address is customerservice@bankname.com. Once you send the email, one of our representatives will get back to you shortly to assist you with the card replacement process. Can you please provide me with your name and account number, so we can verify your identity?",
		},
		{
			user: "My name is Jane Doe, and my account number is 987654.",
			chatbot:
				"Thank you, Jane. We will verify your account information and take the necessary steps to block your lost card and issue a new one. In order to get the new card to you as quickly as possible, could you please provide us with your house address?",
		},
		{
			user: "Yes, my house address is 123 Main Street.",
			chatbot:
				"Great, we have your name, account number, and house address. Based on your location, we can assign the closest bank branch to you for you to pick up your new card. The branch address is 789 Elm Street. Is there anything else I can assist you with at this time?",
		},
		{
			user: "No, that's all. Thank you for your help.",
			chatbot:
				"You're welcome, Jane. We're sorry for any inconvenience this may have caused you, but we will do our best to resolve the issue as quickly as possible. If you have any further questions or concerns, don't hesitate to contact us.",
		},
	];

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
