// app/events/[slug]/page.jsx
import EventDetailPage from "./EventDetailPage";

export default async function EventPage({ params }) {
  const { slug } = params;

  return (
    <div className="w-full flex items-start justify-center">
      <EventDetailPage slug={slug} />
    </div>
  );
}
