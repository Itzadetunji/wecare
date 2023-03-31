import { Dispatch, SetStateAction } from "react";

interface SearchInputProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {
	return (
		<div className="w-full flex items-center border border-[#C2C2C2] py-[15px] px-[20px] rounded-[5px] gap-[7px]">
			<svg
				width="11"
				height="11"
				viewBox="0 0 11 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.1719 10.5938L6.26562 6.6875C5.95312 6.94792 5.59375 7.15104 5.1875 7.29688C4.78125 7.44271 4.375 7.51563 3.96875 7.51563C2.95833 7.51563 2.10687 7.16917 1.41437 6.47625C0.721458 5.78375 0.375 4.9375 0.375 3.9375C0.375 2.9375 0.721458 2.09104 1.41437 1.39812C2.10687 0.705625 2.95312 0.359375 3.95312 0.359375C4.95312 0.359375 5.80208 0.705625 6.5 1.39812C7.19792 2.09104 7.54687 2.9375 7.54687 3.9375C7.54687 4.375 7.46875 4.79687 7.3125 5.20312C7.15625 5.60937 6.95312 5.95312 6.70312 6.23438L10.625 10.1563L10.1719 10.5938ZM3.96875 6.89063C4.79167 6.89063 5.48958 6.60687 6.0625 6.03937C6.63542 5.47146 6.92187 4.77083 6.92187 3.9375C6.92187 3.10417 6.63542 2.40354 6.0625 1.83562C5.48958 1.26812 4.79167 0.984375 3.96875 0.984375C3.13542 0.984375 2.43229 1.26812 1.85938 1.83562C1.28646 2.40354 1 3.10417 1 3.9375C1 4.77083 1.28646 5.47146 1.85938 6.03937C2.43229 6.60687 3.13542 6.89063 3.96875 6.89063Z"
					fill="#1C1B1F"
				/>
			</svg>
			<input
				className="placeholder:text-black text-[12px] font-light w-full focus:outline-none"
				placeholder="Search a Subject"
			/>
		</div>
	);
};

export default SearchInput;
