import { client } from "@/sanity/lib/client";
import { TeamMember } from "@/types/teamMember";

export const fetchAllTeamMembers = async (): Promise<TeamMember[]> => {
	const query = `*[_type == "teamMember"]{
    _id,
    name,
    position,
    degree,
    "profile_image": profile_image.asset->url,
    bio,
    quote
  }`;

	try {
		const teamMembers = await client.fetch(query);
		return teamMembers;
	} catch (error) {
		console.error("Error fetching Team Members:", error);
		return [];
	}
};
