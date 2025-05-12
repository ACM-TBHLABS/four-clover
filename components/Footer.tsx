"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	return (
		<div
			className={`w-full flex flex-col items-center border-t border-gray-300`}
		>
			<div className="max-w-[1400px] w-full py-4 px-4 md:px-[50px] lg:px-[150px] h-full md:py-[50px] flex flex-col md:flex-row justify-between items-start gap-8 relative">
				{/* Desktop navigation */}
				<div className="h-full md:mt-2 flex flex-col md:flex-row items-start gap-8 md:gap-10 font-helvetica text-lg lg:text-2xl font-normal">
					<div className="flex flex-col">
						<div className="md:mb-4">
							<h1
								className="text-xl lg:text-2xl font-medium hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
								onClick={() => {
									router.push("/about");
								}}
							>
								About
							</h1>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/about#vision");
								}}
							>
								Vision
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/about#mission");
								}}
							>
								Mission
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/about#journey");
								}}
							>
								Journey
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/about#team");
								}}
							>
								Teams
							</h2>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="md:mb-4">
							<h1
								className="text-xl lg:text-2xl font-medium hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
								onClick={() => {
									router.push("/events");
								}}
							>
								Events
							</h1>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/events#upcoming");
								}}
							>
								Upcoming
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/events#highlights");
								}}
							>
								Highlights
							</h2>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="md:mb-4">
							<h1
								className="text-xl lg:text-2xl font-medium hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
								onClick={() => {
									router.push("/products");
								}}
							>
								Products
							</h1>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/products");
								}}
							>
								Medical
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/products");
								}}
							>
								Dental
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/products");
								}}
							>
								Equipment
							</h2>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="md:mb-4">
							<h1
								className="text-xl lg:text-2xl font-medium hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
								onClick={() => {
									router.push("/career");
								}}
							>
								Career
							</h1>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/career#team");
								}}
							>
								Our Team
							</h2>
						</div>
						<div>
							<h2
								className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
								onClick={() => {
									router.push("/career#join");
								}}
							>
								Join Us
							</h2>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 md:mt-2 text-xl lg:text-2xl font-medium">
					<h1 className="block">Follow us on</h1>
					<div className="flex justify-center space-x-2 lg:space-x-4 items-center w-full">
						<div className="hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M13.78 9.46a.38.38 0 0 0-.38.38v1.67L12 9.65a.4.4 0 0 0-.33-.19a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38a.38.38 0 0 0 .38-.38V11l1.39 1.91a.27.27 0 0 0 .15.11a.3.3 0 0 0 .14 0A.33.33 0 0 0 14 13l.1-.07a.4.4 0 0 0 .11-.27V9.84a.38.38 0 0 0-.43-.38M9.2 12.27H8.14V9.84a.38.38 0 0 0-.38-.38a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38H9.2a.39.39 0 0 0 .39-.38a.39.39 0 0 0-.39-.41m1.11-2.81a.39.39 0 0 0-.39.38v2.84a.39.39 0 0 0 .39.38a.38.38 0 0 0 .38-.38V9.84a.38.38 0 0 0-.38-.38M17.91 2H6.09A4.1 4.1 0 0 0 2 6.09v11.82A4.1 4.1 0 0 0 6.09 22h11.82A4.1 4.1 0 0 0 22 17.91V6.09A4.1 4.1 0 0 0 17.91 2m.31 12.28a2 2 0 0 1-.13.17a5.5 5.5 0 0 1-.8.8c-2 1.87-5.36 4.11-5.81 3.76s.64-1.76-.53-2a1 1 0 0 1-.25 0c-3.44-.48-6-2.89-6-5.78c0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 0 1-1.16 3.05m-1.71-4.81H15a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38h1.48a.38.38 0 0 0 .38-.38a.38.38 0 0 0-.38-.38h-1.03v-.6h1.06a.39.39 0 0 0 .38-.39a.38.38 0 0 0-.38-.38h-1.06v-.61h1.06a.38.38 0 0 0 .38-.38a.38.38 0 0 0-.38-.48"
								/>
							</svg>
						</div>
						<div
							className="hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out"
							onClick={() => {
								window.open(
									"https://web.facebook.com/fourclover.co/",
									"_blank"
								);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
								/>
							</svg>
						</div>
						<div className="hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
