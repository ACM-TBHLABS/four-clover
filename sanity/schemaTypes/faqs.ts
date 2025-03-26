import { defineType, defineField } from "sanity";

export default defineType({
	name: "faq",
	type: "document",
	title: "FAQ",
	fields: [
		defineField({
			name: "question",
			type: "string",
			title: "Question",
			validation: (Rule) => Rule.required().error("Question is required"),
		}),
		defineField({
			name: "answer",
			type: "text",
			title: "Answer",
			validation: (Rule) => Rule.required().error("Answer is required"),
		}),
		defineField({
			name: "ref_links",
			type: "array",
			title: "Reference Links",
			of: [
				defineField({
					name: "link",
					type: "url",
					title: "Link",
					validation: (Rule) =>
						Rule.uri({
							scheme: ["http", "https"],
						}).error("Must be a valid URL"),
				}),
			],
		}),
	],
});
