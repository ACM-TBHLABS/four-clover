import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product Name",
      validation: (Rule) =>
        Rule.required().max(100).warning("Shorter names are usually better"),
    }),
    defineField({
      name: "productHeroImage",
      type: "image",
      title: "Product Hero Image",
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: (Rule) => Rule.required().error("Hero image is required"),
    }),
    defineField({
      name: "productImages",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "productDescription",
      type: "text",
      title: "Product Description",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .warning("Description should be at least 10 characters"),
    }),
    defineField({
      name: "productSKU",
      type: "string",
      title: "Product SKU",
      validation: (Rule) =>
        Rule.required()
          .regex(/^[A-Z0-9-]+$/, {
            name: "SKU format",
            invert: false,
          })
          .error("SKU must be alphanumeric and can include dashes"),
    }),
    defineField({
      name: "productCategory",
      type: "string",
      title: "Product Category",
      options: {
        list: [
          { title: "Dental Aligners", value: "dental-aligners" },
          { title: "Chairs", value: "chairs" },
          { title: "Implants", value: "implants" },
          { title: "3D Scanners", value: "3d-scanners" },
        ],
      },
      validation: (Rule) => Rule.required().error("Category is required"),
    }),
  ],
});
