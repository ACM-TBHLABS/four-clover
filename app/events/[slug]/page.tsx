// app/events/[slug]/page.tsx
import EventDetailSection from "./EventDetailSection";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div className="w-full flex items-start justify-center">
      <EventDetailSection slug={slug} />
    </div>
  );
}
