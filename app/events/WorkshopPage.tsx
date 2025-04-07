import React, { useState, useEffect } from "react";

import EventsSection from "@/components/sections/events/EventsSection";
import HeroSection from "@/components/sections/workshop/HeroSection";
import IntroSection from "@/components/sections/events/IntroSection";
import { fetchAllEvents } from "@/services/api/eventService";
import { Event } from "@/types/event";

const WorkshopPage = async () => {
  const events: Event[] = await fetchAllEvents();

  if (!events) {
    return <h1>Loading...</h1>;
  }

  const now = new Date();
  const mainEvents = events.filter(
    (event) => event.display_on_main_screen && new Date(event.start_date) > now
  );
  let mainEvent = mainEvents.sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  )[0];

  if (!mainEvent) {
    mainEvent = events[0];
  }
  return (
    <div className="flex flex-col gap-[50px] px-[24px] md:px-[150px]">
      <HeroSection event={mainEvent} />
      <IntroSection event={events[0]} />
      <EventsSection events={events} />
    </div>
  );
};

export default WorkshopPage;
