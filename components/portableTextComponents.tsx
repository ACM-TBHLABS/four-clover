import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-4">
        {value.asset?._ref && (
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Event image'}
            width={600}
            height={400}
            className="rounded-lg"
          />
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-bold mt-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold mt-3">{children}</h2>,
    h6: ({ children }) => <h6 className="text-lg font-medium mt-2">{children}</h6>,
    normal: ({ children }) => <p className="text-base leading-6 mt-2">{children}</p>,
  },
};
