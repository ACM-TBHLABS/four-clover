// app/events/[slug]/EventDetailSection.tsx
"use client";

import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portableTextComponents";
import EventRegistrationDialog from "@/components/EventRegistrationDialog";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function formatDateRange(start: string, end: string) {
	const startDate = new Date(start);
	const endDate = new Date(end);

	const sameMonth = startDate.getMonth() === endDate.getMonth();
	const startStr = format(startDate, "MMMM d");
	const endStr = sameMonth ? format(endDate, "d") : format(endDate, "MMMM d");

	return `${startStr}-${endStr}, ${endDate.getFullYear()}`;
}

export default function EventDetailSection({ event }: { event: any }) {
	const router = useRouter();
	const dateStr = formatDateRange(event.start_date, event.end_date);
	const isBeforeEndDate = new Date() < new Date(event.end_date);

	return (
		<div className="max-w-screen md:max-w-[1400px] w-full px-[24px] md:px-[50px] lg:px-[150px]">
			<div className="bg-accent p-4 relative">
				<ArrowLeft
					className="absolute top-4 left-4 text-black md:w-12 md:h-12 w-8 h-8 cursor-pointer hover:scale-105 transition"
					strokeWidth={1}
					onClick={() => router.push("/events")}
				/>
				<div className="w-full h-[100vw] md:h-[30vw] aspect-video">
					<img
						src={urlFor(event.intro_image).url()}
						className="w-full h-full object-contain"
						alt={event.name}
					/>
				</div>

				<div className="mt-6">
					<p className="text-sm text-gray-500 mb-2">
						{dateStr}, {event.location}
					</p>
					<h1 className="text-4xl font-semibold mb-2">
						{event.name}
					</h1>
					<p className="text-lg text-gray-600">{event.tagline}</p>
				</div>

				<EventRegistrationDialog
					eventName={event.name}
					disabled={!isBeforeEndDate}
				/>
			</div>
			<div className="mt-10 pb-10">
				<PortableText
					value={event.content}
					components={portableTextComponents}
				/>
			</div>
		</div>
	);
}
