import AuthenticationPageWrapper from "@/components/AuthenticationPageWrapper";
import InputField from "@/components/InputField";
import OpenMailItem from "@/components/OpenMailItem";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const ForgotPasswordPage: NextPage = () => {
	return (
		<AuthenticationPageWrapper>
			<img
				className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] mb-[30px] lg:mb-[40px]"
				src="/images/AuthenticationPages/wecarelogo.svg"
			/>
			<p className="font-bold text-[24px] lg:text-[30px]">
				Check your email
			</p>
			<p className=" text-[16px] lg:text-[18px] mt-[4px] lg:mt-[8px] leading-[18px]">
				We sent an email to{" "}
				<span className="font-semibold">james@ubagroup.com </span>with
				instructions on how to reset password.
			</p>
			<Link href="/forgot_password">
				<p className="text-[15px] text-[#552BCC] mt-[20px]">
					Change email address
				</p>
			</Link>
			<section className="flex flex-col mt-[50px] gap-[24px]">
				<OpenMailItem iconPath={"/images/AuthenticationPages/gmailIcon.png"} text="Open Gmail" />
				<OpenMailItem iconPath={"/images/AuthenticationPages/emailApp.png"} text="Open Email App"/>
				<OpenMailItem iconPath={"/images/AuthenticationPages/outlookApp.png"} text="Open Outlook"/>
			</section>

			<p className="text-center mt-[24px] lg:mt-[35px]">
				<Link href={"/signup"}>{"<<< Back to Login"}</Link>
			</p>
		</AuthenticationPageWrapper>
	);
};

export default ForgotPasswordPage;
