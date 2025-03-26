import { defineType, defineField } from "sanity";

export default defineType({
	name: "event",
	type: "document",
	title: "Event",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Event Name",
			validation: (Rule) =>
				Rule.required().error("Event name is required"),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "name",
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
			type: "text",
			title: "Description",
			validation: (Rule) =>
				Rule.required().error("Description is required"),
		}),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
			validation: (Rule) =>
				Rule.max(150).warning("Keep the tagline concise"),
		}),
		defineField({
			name: "start_date",
			type: "datetime",
			title: "Start Date",
			validation: (Rule) =>
				Rule.required().error("Start date is required"),
		}),
		defineField({
			name: "end_date",
			type: "datetime",
			title: "End Date",
			validation: (Rule) =>
				Rule.required()
					.min(Rule.valueOfField("start_date"))
					.error("End date must be after start date"),
		}),
		defineField({
			name: "location",
			type: "string",
			title: "Location",
			validation: (Rule) => Rule.required().error("Location is required"),
		}),
		defineField({
			name: "country",
			type: "string",
			title: "Country",
			validation: (Rule) => Rule.required().error("Country is required"),
		}),
		defineField({
			name: "intro_title",
			type: "string",
			title: "Intro Title",
			validation: (Rule) =>
				Rule.required().error("Intro title is required"),
		}),
		defineField({
			name: "intro_description",
			type: "text",
			title: "Intro Description",
		}),
		defineField({
			name: "intro_video_url",
			type: "url",
			title: "Intro Video URL",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https"],
				}).error("Must be a valid URL"),
		}),
		defineField({
			name: "intro_image",
			type: "image",
			title: "Intro Image",
			options: {
				hotspot: true,
			},
			validation: (Rule) =>
				Rule.required().error("Intro image is required"),
		}),
		defineField({
			name: "display_on_main_screen",
			type: "boolean",
			title: "Display on Main Screen",
			description: "Toggle to display this event on the main screen",
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
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
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		}),
	],
});
