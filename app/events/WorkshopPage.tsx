import React, { useState, useEffect } from "react";

import EventsSection from "@/components/sections/events/EventsSection";
import HeroSection from "@/components/sections/workshop/HeroSection";
import IntroSection from "@/components/sections/events/IntroSection";
import { fetchAllEvents } from "@/services/api/eventService";
import { Event } from "@/types/event";

const WorkshopPage = async () => {
  const events = await fetchAllEvents();

  if (!events) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-[50px] px-[150px]">
      <HeroSection event={events[0]} />
      <IntroSection />
      <EventsSection events={events} />
    </div>
  );
};

export default WorkshopPage;
