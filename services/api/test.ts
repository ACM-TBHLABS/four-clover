import { client } from "@/sanity/lib/client";

export async function fetchEvents() {
	const query = `*[_type == "event"]{
    _id,
    name,
    "slug": slug.current,
    intro_image,
    start_date,
    end_date
  }`;
	const events = await client.fetch(query);
	return events;
}

export async function fetchEventBySlug(slug: string) {
	const query = `*[_type == "event" && slug.current == $slug][0]{
    _id,
    name,
intro_image {
    asset->{
      _id,
      url,
      metadata
    }
  },    start_date,
    end_date,
    content
  }`;
	const event = await client.fetch(query, { slug });
	return event;
}
