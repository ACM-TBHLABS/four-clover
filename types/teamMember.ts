import { Image } from "./Image";

export interface TeamMember {
	_id: string;
	name: string;
	position: string;
	degree?: string;
	profile_image: Image;
	bio: string;
	quote?: string;
	display_on_leadership_screen?: boolean;
}
