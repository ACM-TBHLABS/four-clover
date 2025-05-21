// app/events/[slug]/EventDetailPage.tsx
import { fetchEventBySlug } from "@/services/api/eventService";
import EventDetailSection from "./EventDetailSection";

export default async function EventDetailPage({ slug }: { slug: string }) {
	const event = await fetchEventBySlug(slug);

	if (!event) return <div>Event not found.</div>;

	return <EventDetailSection event={event} />;
}
