"use client";
import React, { useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ReachOutSection = () => {
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID ?? (() => { throw new Error("SERVICE_ID is not defined in environment variables"); })(), // Replace with your EmailJS service ID
				process.env.NEXT_PUBLIC_TEMPLATE_ID ?? (() => { throw new Error("Template ID is not defined in environment variables"); })(), // Replace with your EmailJS template ID
				formRef.current!,
				process.env.NEXT_PUBLIC_PUBLIC_KEY ?? (() => { throw new Error("Public Key is not defined in environment variables"); })() // Replace with your EmailJS public key
			)
			.then(
				(result) => {
					toast.success("Email successfully sent!");
					formRef.current!.reset();
				},
				(error) => {
					toast.error("Error sending email. Please try again later.");
				}
			);
	};

	return (
		<div className="flex flex-col md:flex-row py-[50px] gap-[50px]">
			<div className="flex-1 w-full flex flex-col gap-[12px]">
				<h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] uppercase leading-none whitespace-nowrap">
					Reach out
				</h1>
				<h1 className="font-helvetica font-light text-[18px] md:text-[24px] leading-[1.1]">
					Ready to Shape the Future of Dentistry? Apply today and
					let's make a difference together!
				</h1>
			</div>
			<div className="flex-1 w-full flex flex-col gap-[12px]">
				<form ref={formRef} onSubmit={handleSubmit}>
					<div className="w-full flex flex-col gap-1 md:gap-2">
						<h1 className="font-helvetica font-normal text-[18px] md:text-[24px]">
							Email
						</h1>
						<input
							type="email"
							name="email"
							placeholder="sales@fourclover.com"
							required
							className="w-full px-2 py-1 md:py-3 md:px-6 flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
						/>
					</div>
					<div className="w-full flex flex-col gap-1 md:gap-2">
						<h1 className="font-helvetica font-normal text-[18px] md:text-[24px]">
							Bio
						</h1>
						<input
							type="text"
							name="bio"
							placeholder="Your bio"
							required
							className="w-full px-2 py-1 md:py-3 md:px-6 flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
						/>
					</div>
					<button
						type="submit"
						className="mt-3 px-2 py-1 md:px-6 md:py-4 flex gap-[20px] border-[0.5px] border-black rounded-[5px] items-center justify-center font-helvetica font-normal text-[20px] md:text-[24px]"
					>
						Submit <ArrowRightIcon />
					</button>
				</form>
			</div>
		</div>
	);
};

export default ReachOutSection;
