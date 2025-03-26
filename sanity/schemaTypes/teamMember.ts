import { defineType, defineField } from "sanity";

export default defineType({
	name: "teamMember",
	type: "document",
	title: "Team Member",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) => Rule.required().error("Name is required"),
		}),
		defineField({
			name: "position",
			type: "string",
			title: "Position",
			validation: (Rule) => Rule.required().error("Position is required"),
		}),
		defineField({
			name: "degree",
			type: "string",
			title: "Degree",
		}),
		defineField({
			name: "profile_image",
			type: "image",
			title: "Profile Image",
			options: {
				hotspot: true,
			},
			validation: (Rule) =>
				Rule.required().error("Profile image is required"),
		}),
		defineField({
			name: "bio",
			type: "text",
			title: "Bio",
			validation: (Rule) =>
				Rule.required()
					.min(10)
					.error("Bio should be at least 10 characters"),
		}),
		defineField({
			name: "quote",
			type: "string",
			title: "Favorite Quote",
			validation: (Rule) =>
				Rule.max(200).warning("Keep quotes under 200 characters"),
		}),
	],
});
