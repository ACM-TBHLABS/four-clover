import { Image } from "./image";
export interface Partnership {
	_id: string;
	name: string;
	coverPhoto: Image;
	logo: Image;
	description: string;
	link?: string; // Optional since URLs might not always be provided
}
