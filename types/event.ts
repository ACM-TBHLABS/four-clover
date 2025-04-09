import { Image } from "./image";

export interface Event {
	_id: string;
	tag: string;
	name: string;
	slug: { current: string };
	cover_image: Image;
	tagline?: string;
	start_date: string; // ISO 8601 format (datetime)
	end_date: string;
	location: string;
	country: string;
	intro_title: string;
	intro_description?: string;
	intro_video_url?: string;
	intro_image: Image;
	display_on_main_screen?: boolean;
	content?: Array<
		| { _type: "block"; children: any[] } // Blocks can contain various rich text elements
		| { _type: "image"; asset: Image; alt?: string }
	>;
}
