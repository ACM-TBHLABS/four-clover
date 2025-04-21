"use client";
import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import EventCardStretched from "@/components/EventCardStretched";
import { Event } from "@/types/event";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface EventsSectionProps {
  events?: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events = [] }) => {
  const [selectedType, setSelectedType] = useState<string>("all");

  // If no events are provided, return early or show loading state
  if (!events || events.length === 0) {
    return (
      <div className="w-full flex flex-col gap-[50px]">
        <p>No events available at this time.</p>
      </div>
    );
  }

  // Get unique event types
  const eventTypes = [
    "all",
    ...new Set(events.map((event) => event.tag).filter(Boolean)),
  ];

  const filteredEvents =
    selectedType === "all"
      ? events
      : events.filter((event) => event.tag === selectedType);

  const comingSoonEvents = filteredEvents
    .filter((event) => new Date(event?.start_date) > new Date())
    .slice(0, 2);

  const highlightEvents = filteredEvents.filter(
    (event) => new Date(event?.start_date) < new Date()
  );

  return (
    <div className="w-full flex flex-col gap-[50px] md:gap-[100px]">
      <ComingSoonSection
        events={comingSoonEvents}
        eventTypes={eventTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
      <HighlightEventsSection events={highlightEvents} />
    </div>
  );
};

interface SectionProps {
  events: Event[];
  eventTypes?: string[];
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}

const ComingSoonSection: React.FC<SectionProps> = ({
  events,
  eventTypes = [],
  selectedType = "all",
  onTypeChange,
}) => {
  return (
    <div id="upcoming" className="flex flex-col md:flex-row gap-[32px]">
      <div className="w-full flex flex-col gap-3 md:gap-5 lg:gap-[50px]">
        <div className="flex justify-between md:justify-start gap-0 md:gap-12 items-center">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] leading-[100%]">
            Coming Soon
          </h1>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange?.(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex justify-start items-stretch flex-row gap-5 md:gap-[50px] overflow-x-scroll overflow-y-hidden">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={event._id || index}
                className="min-w-full w-full lg:max-w-1/2 lg:min-w-[400px] cursor-pointer"
              >
                <Link href={`/events/${event.slug}`}>
                  <EventCard
                    image={
                      urlFor(event.intro_image).url() || "/mockup/workshop.png"
                    }
                    title={event.name || "Dental Workshop"}
                    eventType={event.tag}
                    tagline={
                      event.tagline ||
                      "Practical insights from industry experts"
                    }
                    description={
                      event.intro_description ||
                      "Join us for a two-day event featuring top professionals in the dental industry."
                    }
                  />
                </Link>
              </div>
            ))
          ) : (
            <>
              <h1>No events yet. Stay tuned!</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HighlightEventsSection: React.FC<SectionProps> = ({ events }) => {
  return (
    <div
      id="highlights"
      className="w-full flex flex-col gap-3 md:gap-5 lg:gap-[50px]"
    >
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] leading-[100%]">
        Highlight Events
      </h1>

      {events.length > 0 ? (
        <>
          <div className="hidden xl:flex flex-col gap-[50px]">
            {events.map((event, index) => (
              <Link href={`/events/${event.slug}`} key={event._id || index}>
                <EventCardStretched
                  key={event._id || index}
                  image={
                    urlFor(event.intro_image).url() || "/mockup/workshop.png"
                  }
                  eventType={event.tag}
                  title={event.name || "DENTIS Factory Visit"}
                  tagline={
                    event.tagline || "Practical insights from industry experts"
                  }
                  description={
                    event.intro_description ||
                    "Join us for a two-day event featuring top professionals in the dental industry."
                  }
                />
              </Link>
            ))}
          </div>
          <div className="flex xl:hidden flex-col gap-[50px]">
            {events.map((event, index) => (
              <Link href={`/events/${event.slug}`} key={event._id || index}>
                <EventCard
                  key={event._id || index}
                  image={
                    urlFor(event.intro_image).url() || "/mockup/workshop.png"
                  }
                  title={event.name || "DENTIS Factory Visit"}
                  eventType={event.tag}
                  tagline={
                    event.tagline || "Practical insights from industry experts"
                  }
                  description={
                    event.intro_description ||
                    "Join us for a two-day event featuring top professionals in the dental industry."
                  }
                />
              </Link>
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
