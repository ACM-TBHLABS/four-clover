// app/events/[slug]/page.jsx
import EventDetailSection from "./EventDetailSection";

export default async function EventPage({ params }) {
  const { slug } = params;

  return (
    <div className="w-full flex items-start justify-center">
      <EventDetailSection slug={slug} />
    </div>
  );
}
