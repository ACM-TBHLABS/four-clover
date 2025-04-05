import { client } from "@/sanity/lib/client";
import { Event } from "@/types/event";

export const fetchAllEvents = async () => {
  const query = `*[_type == "event"]{
    _id,
    tag,
    name,
    "slug": slug.current,
    description,
    tagline,
    start_date,
    end_date,
    location,
    country,
    intro_title,
    intro_description,
    intro_video_url,
    "intro_image": intro_image.asset->url,
    display_on_main_screen,
    content
  }`;

  try {
    const events = await client.fetch(query);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchEventBySlug = async (slug) => {
  const query = `*[_type == "event" && slug.current == $slug][0]{
    _id,
    tag,
    name,
    "slug": slug.current,
    description,
    tagline,
    start_date,
    end_date,
    location,
    country,
    intro_title,
    intro_description,
    intro_video_url,
    "intro_image": intro_image.asset->url,
    display_on_main_screen,
    content
  }`;

  try {
    const event = await client.fetch(query, { slug });
    return event;
  } catch (error) {
    console.error(`Error fetching event with slug ${slug}:`, error);
    return null;
  }
};

export const fetchEventsByTag = async (tag) => {
  const query = `*[_type == "event" && tag == $tag]{
    _id,
    tag,
    name,
    "slug": slug.current,
    description,
    tagline,
    start_date,
    end_date,
    location,
    country,
    intro_title,
    intro_description,
    intro_video_url,
    "intro_image": intro_image.asset->url,
    display_on_main_screen,
    content
  }`;

  try {
    const events = await client.fetch(query, { tag });
    return events;
  } catch (error) {
    console.error(`Error fetching events with tag ${tag}:`, error);
    return [];
  }
};
