import { Dispatch, SetStateAction } from "react";

interface InputFieldProps {
	label: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	value,
	setValue,
	type,
}) => {
	return (
		<div className="w-full">
			<p className="font-semibold text-[15px] mb-[8px]">{label}</p>
			<input
				type={type ? type : "text"}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="w-full border-[0.5px] border-[#C2C2C2] focus:outline-none py-[14px] lg:py-[22px] text-[12px] font-light px-[20px] lg:px-[30px] rounded-[5px]"
			></input>
		</div>
	);
};

export default InputField;
