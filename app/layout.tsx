import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Four-Clover",
	description: "Leading to Digital",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden`}
				suppressHydrationWarning
			>
				<Navbar />
				<Providers>
					<Toaster
						theme="light"
						richColors
						position="top-center"
						toastOptions={{
							duration: 5000,
						}}
					/>
					{children}
				</Providers>
				<Footer />
			</body>
		</html>
	);
}
