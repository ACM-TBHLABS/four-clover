"use client";
import React, { useState, useEffect } from "react";
import FAQSection from "@/components/sections/landing/FAQSection";
import EventsSection from "@/components/sections/events/EventsSection";
import HeroSection from "@/components/sections/workshop/HeroSection";
import IntroSection from "@/components/sections/events/IntroSection";
import { fetchAllEvents } from "@/services/api/eventService";
import { Event } from "@/types/event";

const WorkshopPage = () => {
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await fetchAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

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
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-screen md:max-w-[1600px]">
        <div className="flex flex-col gap-[50px] px-[24px] md:px-[150px]">
          <HeroSection event={mainEvent} />
          <IntroSection />
          <EventsSection events={events} />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default WorkshopPage;
