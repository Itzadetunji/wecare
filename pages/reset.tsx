import AuthenticationPageWrapper from "@/components/AuthenticationPageWrapper";
import InputField from "@/components/InputField";
import { Loader } from "@/components/Loader";
import { useForgotResetCompany } from "@/hooks/useCompanyData";
import { Toast } from "@/utils/toast";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ResetPassword: NextPage = () => {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [token, setToken] = useState<any>("");
	const router = useRouter();

	const {
		mutate: forgotResetCompany,
		isLoading,
		isError,
		error,
	} = useForgotResetCompany();

	const checkPasswordRequirements = (password: string) => {
		const regex =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\dA-Za-z]).{8,}$/;
		return regex.test(password);
	};

	useEffect(() => {
		const { token: queryToken } = router.query;
		setToken(queryToken);
	}, [router.isReady, router.query]);

	const handleForgotPassword = () => {
		if (
			checkPasswordRequirements(newPassword) &&
			checkPasswordRequirements(confirmNewPassword)
		) {
			forgotResetCompany({ newPassword, confirmNewPassword, token });
		} else {
			Toast.info(
				"Both passwords must match and follow the new password qualities"
			);
		}
	};
	return (
		<AuthenticationPageWrapper>
			<img
				className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] mb-[30px] lg:mb-[40px]"
				src="/images/AuthenticationPages/wecarelogo.svg"
			/>
			<p className="font-bold text-[24px] lg:text-[30px] text-[#324054]">
				Create new password
			</p>
			<p className=" text-[16px] lg:text-[18px] mt-[4px] lg:mt-[8px] leading-[18px] text-[#324054]">
				Almost done, enter your new password & you are set
			</p>
			<form
				className="mt-[28px] lg:mt-[40px] flex flex-col gap-6 montserratAlternatesFont text-[#324054]"
				method="post"
				onSubmit={(e) => {
					e.preventDefault();
					handleForgotPassword();
				}}
			>
				<InputField
					value={newPassword}
					setValue={setNewPassword}
					label={"New Password"}
				/>
				<InputField
					value={confirmNewPassword}
					setValue={setConfirmNewPassword}
					label={"Confirm New Password"}
				/>
			</form>
			<div className="mt-10 flex flex-col gap-3 text-[#324054]">
				<div className="flex gap-5">
					<p>1 lowercase character</p>
					<p>1 special character</p>
				</div>
				<div className="flex gap-5">
					<p>1 uppercase character</p>
					<p>8 characters minimum</p>
				</div>
				<p>1 numeric digit</p>
			</div>
			<button
				className="text-white w-full h-[50px] lg:h-[60px] bg-[#552BCC] rounded-[5px] mt-[35px] lg:mt-16 lg:text-[20px] font-semibold"
				onClick={(e) => {
					e.preventDefault();
					handleForgotPassword();
				}}
			>
				{isLoading ? <Loader /> : "Reset Password"}
			</button>
			<p className="text-center mt-[15px] lg:mt-[20px] text-[#324054]">
				<Link href={"/login"}>{"<<< Back to Login"}</Link>
			</p>
		</AuthenticationPageWrapper>
	);
};

export default ResetPassword;
