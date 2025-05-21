import { urlFor } from "@/sanity/lib/image";
import { fetchEventBySlug } from "@/services/api/eventService";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portableTextComponents";
import EventRegistrationDialog from "@/components/EventRegistrationDialog";

function formatDateRange(start, end) {
	const startDate = new Date(start);
	const endDate = new Date(end);

	const sameMonth = startDate.getMonth() === endDate.getMonth();
	const startStr = format(startDate, "MMMM d");
	const endStr = sameMonth ? format(endDate, "d") : format(endDate, "MMMM d");

	return `${startStr}-${endStr}, ${endDate.getFullYear()}`;
}

export default async function EventDetailSection({ slug }) {
	const event = await fetchEventBySlug(slug);
	if (!event) return <div>Event not found.</div>;

	const dateStr = formatDateRange(event.start_date, event.end_date);

	const isBeforeEndDate = new Date() < new Date(event.end_date);

	return (
		<div className="max-w-screen md:max-w-[1400px] w-full px-[24px] md:px-[50px] lg:px-[150px]">
			{/* Image */}
			<div className="bg-accent p-4">
				<div className="w-full h-[100vw] md:h-[30vw] aspect-video">
					<img
						src={urlFor(event.intro_image).url()}
						className="w-full h-full object-contain"
						alt={event.name}
					/>
				</div>

				{/* Text Section - aligned to the left */}
				<div className="mt-6">
					{/* DATE + LOCATION */}
					<p className="text-sm text-gray-500 mb-2">
						{dateStr}, {event.location}
					</p>

					{/* TITLE */}
					<h1 className="text-4xl font-semibold mb-2">
						{event.name}
					</h1>

					{/* TAGLINE */}
					<p className="text-lg text-gray-600">{event.tagline}</p>
				</div>

				{/* Show Register Button if event hasn't ended */}
				{isBeforeEndDate && (
					<EventRegistrationDialog eventName={event.name}/>
				)}
			</div>

			{/* Content */}
			<div className="mt-10 pb-10">
				<PortableText
					value={event.content}
					components={portableTextComponents}
				/>
			</div>
		</div>
	);
}
