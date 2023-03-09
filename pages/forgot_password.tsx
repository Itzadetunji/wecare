import AuthenticationPageWrapper from "@/components/AuthenticationPageWrapper";
import InputField from "@/components/InputField";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const ForgotPasswordPage: NextPage = () => {
	const [email, setEmail] = useState("");

	return (
		<AuthenticationPageWrapper>
			<img
				className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] mb-[30px] lg:mb-[40px]"
				src="/images/AuthenticationPages/wecarelogo.svg"
			/>
			<p className="font-bold text-[24px] lg:text-[30px]">
				Forgot Password
			</p>
			<p className=" text-[16px] lg:text-[18px] mt-[4px] lg:mt-[8px] leading-[18px]">
				No worries, we would send your reset instructions
			</p>
			<form className="mt-[28px] lg:mt-[40px] flex flex-col gap-[30px]">
				<InputField value={email} setValue={setEmail} label={"Email"} />
			</form>
			<button className="text-white w-full h-[50px] lg:h-[60px] bg-[#552BCC] rounded-[5px] mt-[35px] lg:mt-[80px] lg:text-[20px] font-semibold">
				Reset Password
			</button>
			<p className="text-center mt-[15px] lg:mt-[20px]">
				<Link href={"/signup"}>{"<<< Back to Login"}</Link>
			</p>
		</AuthenticationPageWrapper>
	);
};

export default ForgotPasswordPage;
