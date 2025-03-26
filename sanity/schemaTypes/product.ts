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
			name: "description",
			type: "text",
			title: "Product Description",
			validation: (Rule) =>
				Rule.required()
					.min(10)
					.error("Description should be at least 10 characters"),
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
			name: "faqs",
			type: "array",
			title: "FAQs",
			of: [
				defineField({
					name: "faq",
					type: "object",
					title: "FAQ",
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
	],
});
