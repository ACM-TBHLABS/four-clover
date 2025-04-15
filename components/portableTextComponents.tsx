import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="relative w-full aspect-[16/9] my-4">
        {value.asset?._ref && (
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Event image"}
            fill
            className="object-contain"
          />
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-15">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-12">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-9">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium mt-6">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-medium mt-6">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-medium mt-6">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-6 mt-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-200 text-red-600 px-1 rounded">{children}</code>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    strike: ({ children }) => <span className="line-through">{children}</span>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 py-2 flex flex-col space-y-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 py-2">{children}</ol>
    ),
  },
};
