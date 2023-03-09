import AuthenticationPageWrapper from "@/components/AuthenticationPageWrapper";
import InputField from "@/components/InputField";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const LoginPage: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthenticationPageWrapper>
			<img
				className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] mb-[30px] lg:mb-[40px]"
				src="/images/AuthenticationPages/wecarelogo.svg"
			/>
			<p className="font-bold text-[24px] lg:text-[30px]">
				Good afternoon 🌅{" "}
			</p>
			<p className=" text-[16px] lg:text-[18px] mt-[4px] lg:mt-[8px]">
				Enter your login credentials
			</p>
			<form className="mt-[28px] lg:mt-[40px] flex flex-col gap-[30px]">
				<InputField
					value={email}
					setValue={setEmail}
					label={"Email / User ID"}
				/>
				<InputField
					value={password}
					setValue={setPassword}
					label={"Password"}
				/>
			</form>
			<Link href="/forgot_password">
				<p className="text-right text-[#552BCC] mt-[8px]">
					Forgot password?
				</p>
			</Link>
			<button className="text-white w-full h-[50px] lg:h-[60px] bg-[#552BCC] rounded-[5px] mt-[35px] lg:mt-[50px] lg:text-[20px] font-semibold">
				Login
			</button>
			<p className="text-center mt-[15px] lg:mt-[20px]">
				Dont have an account?{" "}
				<Link href={"/signup"}>
					<span className="text-[#552BCC] ">Signup</span>
				</Link>
			</p>
		</AuthenticationPageWrapper>
	);
};

export default LoginPage;
