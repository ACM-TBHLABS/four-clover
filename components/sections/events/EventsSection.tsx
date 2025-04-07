import React from "react";
import EventCard from "@/components/EventCard";
import EventCardStretched from "@/components/EventCardStretched";
import { Event } from "@/types/event";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface EventsSectionProps {
  events?: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events = [] }) => {
  // If no events are provided, return early or show loading state
  if (!events || events.length === 0) {
    return (
      <div className="w-full flex flex-col gap-[50px]">
        <p>No events available at this time.</p>
      </div>
    );
  }

  // Filter events for "Coming Soon" section (could be based on date, status, etc.)
  const comingSoonEvents = events.slice(0, 2);

  const highlightEvents = events;
  // const highlightEvents = events.slice(2);

  return (
    <div className="w-full flex flex-col gap-[50px]">
      <ComingSoonSection events={comingSoonEvents} />
      <HighlightEventsSection events={highlightEvents} />
    </div>
  );
};

interface SectionProps {
  events: Event[];
}

const ComingSoonSection: React.FC<SectionProps> = ({ events }) => {
  return (
    <div className="flex flex-col md:flex-row gap-[32px]">
      <div className="w-full flex flex-col gap-[50px]">
        <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
          Coming Soon
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-[50px]">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={event._id || index}
                className="w-full md:w-1/2 cursor-pointer"
              >
                <Link href={`/events/${event.slug}`}>
                  <EventCard
                    image={
                      urlFor(event.intro_image).url() || "/mockup/workshop.png"
                    }
                    title={event.name || "Dental Workshop"}
                    tagline={
                      event.tagline ||
                      "Practical insights from industry experts"
                    }
                    description={
                      event.description ||
                      "Join us for a two-day event featuring top professionals in the dental industry."
                    }
                  />
                </Link>
              </div>
            ))
          ) : (
            <>
              <div className="w-1/2">
                <EventCard
                  image="/mockup/workshop.png"
                  title="Dental Workshop 2025"
                  tagline="Practical insights from industry experts"
                  description="Join us for a two-day event featuring top professionals in the dental industry."
                />
              </div>
              <div className="w-1/2">
                <EventCard
                  image="/mockup/workshop.png"
                  title="Dental Workshop 2025"
                  tagline="Practical insights from industry experts"
                  description="Join us for a two-day event featuring top professionals in the dental industry."
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HighlightEventsSection: React.FC<SectionProps> = ({ events }) => {
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
        Highlight Events
      </h1>

      {events.length > 0 ? (
        <>
          <div className="hidden md:flex flex-col gap-[50px]">
            {events.map((event, index) => (
              <EventCardStretched
                key={event._id || index}
                image={
                  urlFor(event.intro_image).url() || "/mockup/workshop.png"
                }
                title={event.name || "DENTIS Factory Visit"}
                tagline={
                  event.tagline || "Practical insights from industry experts"
                }
                description={
                  event.description ||
                  "Join us for a two-day event featuring top professionals in the dental industry."
                }
              />
            ))}
          </div>
          <div className="flex md:hidden flex-col gap-[50px]">
            {events.map((event, index) => (
              <EventCard
                key={event._id || index}
                image={
                  urlFor(event.intro_image).url() || "/mockup/workshop.png"
                }
                title={event.name || "DENTIS Factory Visit"}
                tagline={
                  event.tagline || "Practical insights from industry experts"
                }
                description={
                  event.description ||
                  "Join us for a two-day event featuring top professionals in the dental industry."
                }
              />
            ))}
          </div>
        </>
      ) : (
        // Fallback content if no events
        <h1>No events</h1>
      )}
    </div>
  );
};

export default EventsSection;
