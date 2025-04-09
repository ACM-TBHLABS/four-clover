// schemas/contacts.ts
import { defineType, defineField } from "sanity";

export default defineType({
	name: "contact",
	type: "document",
	title: "Contact",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) =>
				Rule.required().max(50).warning("Keep the title concise"),
		}),
		defineField({
			name: "email",
			type: "string",
			title: "Email",
			validation: (Rule) =>
				Rule.required().email().error("Must be a valid email address"),
		}),
		defineField({
			name: "phoneNumber",
			type: "string",
			title: "Phone Number",
			validation: (Rule) =>
				Rule.required()
					.min(10)
					.max(20)
					.error("Please enter a valid phone number"),
		}),
	],
});
