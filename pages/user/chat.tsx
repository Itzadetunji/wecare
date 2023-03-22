import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Chat: NextPage = () => {
	return (
		<>
			<section className="flex-1 self-stretch overflow-scroll mx-8 mb-44 mt-5">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
				corporis, sunt facere voluptas optio soluta dolor iusto tempora
				ut nesciunt beatae architecto! Minus necessitatibus officiis
				magni adipisci esse. Excepturi quidem impedit veritatis minima
				autem a quas illo, similique laboriosam, fugiat rerum modi fugit
				voluptatem unde voluptatum facilis blanditiis maiores omnis
				minus numquam eaque magnam cumque hic. Ducimus, neque quaerat
				animi dignissimos explicabo aspernatur esse illum dolores
				repellendus cum eveniet amet harum nesciunt, error eos quas
				placeat possimus corrupti provident odio! Quod harum,
				necessitatibus exercitationem dolore, quam excepturi deserunt
				rerum, odio corrupti doloremque minus est. Rem, eligendi a!
				Incidunt vero fugit, rem deleniti veritatis optio praesentium
				nemo dolorum quibusdam qui voluptatibus accusamus provident
				molestiae beatae aperiam. Magnam quo mollitia, aspernatur
				officia eligendi blanditiis repudiandae? Sunt nisi ducimus
				labore fuga commodi qui, eius adipisci reprehenderit unde
				distinctio enim delectus. Libero esse veritatis cum voluptatum
				est sed commodi iure recusandae vero, corrupti accusamus ipsum
				voluptatibus a asperiores deleniti velit culpa. Quos sunt quidem
				quod sapiente fugiat, asperiores deserunt itaque praesentium
				debitis id fugit quae in quia libero laudantium eius soluta
				nostrum odit aliquid! Ipsum, sit, soluta nam eos dolorem error
				repellendus quisquam repellat rerum aliquam eveniet optio veniam
				corporis aperiam eum, officiis distinctio Lorem ipsum dolor sit,
				amet consectetur adipisicing elit. Dignissimos illo beatae
				dolorum doloribus maiores reprehenderit vero doloremque impedit
				voluptas quia ullam unde porro iste quod, totam animi, amet
				quaerat tempora nam autem hic perferendis? Illo, ab nesciunt
				itaque distinctio dolores vel aliquid amet explicabo, nihil eius
				nostrum veritatis alias quia vero veniam dolore dolorum! Beatae,
				autem sapiente? Quasi optio voluptates ex quos quas neque sed
				repudiandae maiores? Necessitatibus eligendi expedita,
				voluptatem, quod quia minus assumenda eaque molestiae sunt amet
				suscipit. Saepe deserunt corporis optio rerum fugiat earum modi
				esse facilis sed maiores nobis tempore tenetur ipsum recusandae,
				neque nam illum?.
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
								src={"./icons/attatch-file.svg"}
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
