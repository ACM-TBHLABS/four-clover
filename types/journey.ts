import { Image } from "./image";

export interface Journey {
  _id: string;
  name: string;
  year: number;
  description: string;
  journey_image: Image;
}
