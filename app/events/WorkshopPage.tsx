"use client";
import React, { useState, useEffect } from "react";

import EventsSection from "@/components/sections/events/EventsSection";
import HeroSection from "@/components/sections/workshop/HeroSection";
import IntroSection from "@/components/sections/events/IntroSection";
import { fetchAllEvents } from "@/services/api/eventService";
import { Event } from "@/types/event";

const WorkshopPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetchAllEvents();
        setEvents(res);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!events) {
    return <h1>Loading...</h1>;
  }

  const now = new Date();
  const mainEvents = events?.filter(
    (event) => event.display_on_main_screen && new Date(event?.start_date) > now
  );
  let mainEvent = mainEvents.sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b?.start_date).getTime()
  )[0];

  if (!mainEvent) {
    mainEvent = events[0];
  }
  return (
    <div className="flex flex-col gap-[50px] px-6 md:px-[50px] lg:px-[150px]">
      <HeroSection event={mainEvent} />
      <IntroSection event={mainEvent} />
      <EventsSection events={events} />
    </div>
  );
};

export default WorkshopPage;
