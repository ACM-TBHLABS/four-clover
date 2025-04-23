import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};

export const getSanityFileUrl = (ref: string) => {
	const [, id, ext] = ref.split("-");
	return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${ext}`;
};

// <Image
// src={urlFor(products[0].productHeroImage)
//   .url()} // Add .url()
// width={1920}
// height={1080}
// alt={products[0].productName} // Required by Next.js
// priority // Optional: improves performance for above-the-fold images
// />
