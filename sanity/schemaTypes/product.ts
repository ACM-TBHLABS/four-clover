import { defineType, defineField } from "sanity";

export default defineType({
	name: "product",
	type: "document",
	title: "Product",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Product Name",
			validation: (Rule) =>
				Rule.required().max(100).error("Name is required"),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "name", // Auto-generate slug from product name
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^a-z0-9-]/g, "")
						.slice(0, 200),
			},
			validation: (Rule) => Rule.required().error("Slug is required"),
		}),
		defineField({
			name: "description",
			type: "array",
			title: "Product Description",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative text",
							description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
						},
					],
				},
			],
		}),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
			validation: (Rule) =>
				Rule.required().max(150).warning("Keep it concise"),
		}),
		defineField({
			name: "price",
			type: "number",
			title: "Price",
			validation: (Rule) =>
				Rule.required().min(0).error("Price must be positive"),
		}),
		defineField({
			name: "heroImage",
			type: "image",
			title: "Hero Image",
			options: {
				hotspot: true,
			},
			validation: (Rule) =>
				Rule.required().error("Hero image is required"),
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Product Images",
			of: [{ type: "image" }],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			name: "discount",
			type: "number",
			title: "Discount Percentage",
			validation: (Rule) =>
				Rule.min(0)
					.max(100)
					.warning("Discount should be between 0-100%"),
		}),
		defineField({
			name: "ref_link",
			type: "url",
			title: "Reference Link",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https"],
				}).error("Must be a valid URL"),
		}),
		defineField({
			name: "brand",
			type: "string",
			title: "Brand",
		}),
		defineField({
			name: "recommendedProducts",
			type: "array",
			title: "Recommended Products",
			of: [{ type: "reference", to: [{ type: "product" }] }],
		}),
		defineField({
			name: "productFaqs",
			type: "array",
			title: "Product FAQs",
			of: [
				defineField({
					name: "productFaqs",
					type: "object",
					title: "Product FAQ",
					fields: [
						defineField({
							name: "question",
							type: "string",
							title: "Question",
							validation: (Rule) =>
								Rule.required().error("Question is required"),
						}),
						defineField({
							name: "answer",
							type: "text",
							title: "Answer",
							validation: (Rule) =>
								Rule.required().error("Answer is required"),
						}),
					],
				}),
			],
			validation: (Rule) =>
				Rule.max(5).warning("Keep FAQs concise (max 5)"),
		}),
		// colors
		defineField({
			name: "colors",
			type: "array",
			title: "Available Colors",
			of: [
				defineField({
					name: "color",
					type: "string",
					title: "Color Name",
					validation: (Rule) =>
						Rule.required().error("Color name is required"),
				}),
				defineField({
					name: "colorCode",
					type: "string",
					title: "Color Code",
					validation: (Rule) =>
						Rule.required().error("Color code is required"),
				}),
			],
		}),
	],
});
