import { urlFor } from "@/sanity/lib/image";
import { fetchEventBySlug } from "@/services/api/eventService";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { PortableText } from "@portabletext/react"; // ← Import this
import { portableTextComponents } from "@/components/portableTextComponents"; // ← Adjust path if needed

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
};

function formatDateRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const startStr = format(startDate, "MMMM d");
  const endStr = sameMonth ? format(endDate, "d") : format(endDate, "MMMM d");

  return `${startStr}-${endStr}, ${endDate.getFullYear()}`;
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;
  const event = await fetchEventBySlug(slug);
  if (!event) return <div>Event not found.</div>;

  const dateStr = formatDateRange(event.start_date, event.end_date);

  return (
    <div className="w-full flex items-start justify-center">
      <div className="max-w-screen md:max-w-[1600px] w-full px-[150px]">
        {/* Image */}
        <div className="w-full aspect-video">
          <img
            src={urlFor(event.intro_image).url()}
            className="w-full h-full object-cover"
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
          <h1 className="text-4xl font-semibold mb-2">{event.name}</h1>

          {/* TAGLINE */}
          <p className="text-lg text-gray-600">{event.tagline}</p>
        </div>
        {/* Content */}
        <div className="mt-10 pb-10">
          <PortableText
            value={event.content}
            components={portableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
