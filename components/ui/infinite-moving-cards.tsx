"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		imagePath: string;
		link?: string; // 🆕 Added link
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--animation-direction",
				direction === "left" ? "forwards" : "reverse"
			);
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			const duration =
				speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
			containerRef.current.style.setProperty(
				"--animation-duration",
				duration
			);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
				className
			)}
		>
			<div
				ref={scrollerRef}
				className={cn(
					"flex items-center justify-center w-max min-w-full shrink-0 flex-nowrap gap-[40px] md:gap-[80px] lg:gap-[120px]",
					start && "animate-scroll"
				)}
			>
				{items.map((item) =>
					item.link ? (
						<a
							key={item.imagePath}
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							<img
								src={item.imagePath}
								alt=""
								className="w-[100px] md:w-[150px] lg:w-[300px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
							/>
						</a>
					) : (
						<img
							key={item.imagePath}
							src={item.imagePath}
							alt=""
							className="w-[100px] md:w-[150px] lg:w-[300px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
						/>
					)
				)}
			</div>
		</div>
	);
};
