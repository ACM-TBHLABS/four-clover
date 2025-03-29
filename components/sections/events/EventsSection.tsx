import React from "react";
import EventCard from "@/components/EventCard";
import EventCardStretched from "@/components/EventCardStretched";

const EventsSection = () => {
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <ComingSoonSection />
      <HighlightEventsSection />
    </div>
  );
};

const ComingSoonSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[32px]">
      <div className="w-full flex flex-col gap-[50px]">
        <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
          Coming Soon
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-[50px]">
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
        </div>
      </div>
    </div>
  );
};

const HighlightEventsSection = () => {
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
        Highlight Events
      </h1>
      <EventCardStretched
        image="/mockup/workshop.png"
        title="DENTIS Factory Visit"
        tagline="Practical insights from industry experts"
        description="Join us for a two-day event featuring top professionals in the dental industry."
      />
      <EventCardStretched
        image="/mockup/workshop.png"
        title="DENTIS Factory Visit"
        tagline="Practical insights from industry experts"
        description="Join us for a two-day event featuring top professionals in the dental industry."
      />
      <EventCardStretched
        image="/mockup/workshop.png"
        title="Runyes Factory Visit"
        tagline="Practical insights from industry experts"
        description="Join us for a two-day event featuring top professionals in the dental industry."
      />
      <EventCardStretched
        image="/mockup/workshop.png"
        title="DENTIS Factory Visit"
        tagline="Practical insights from industry experts"
        description="Join us for a two-day event featuring top professionals in the dental industry."
      />
      <EventCardStretched
        image="/mockup/workshop.png"
        title="DENTIS Factory Visit"
        tagline="Practical insights from industry experts"
        description="Join us for a two-day event featuring top professionals in the dental industry."
      />
    </div>
  );
};

export default EventsSection;
