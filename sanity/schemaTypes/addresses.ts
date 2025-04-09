// schemas/addresses.ts
import { defineType, defineField } from "sanity";

export default defineType({
	name: "address",
	type: "document",
	title: "Address",
	fields: [
		defineField({
			name: "location",
			type: "string",
			title: "Location",
			description: "Name of the place or branch (e.g. Head Office)",
			validation: (Rule) =>
				Rule.required().max(100).warning("Keep location names concise"),
		}),
		defineField({
			name: "address",
			type: "text",
			title: "Full Address",
			validation: (Rule) =>
				Rule.required()
					.max(300)
					.warning("Keep the address short and readable"),
		}),
		defineField({
			name: "email",
			type: "string",
			title: "Email",
			validation: (Rule) =>
				Rule.email().required().error("Must be a valid email address"),
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
