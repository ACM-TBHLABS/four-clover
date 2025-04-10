import { client } from "@/sanity/lib/client";
import { TeamMember } from "@/types/teamMember";

export const fetchAllTeamMembers = async (): Promise<TeamMember[]> => {
	const query = `*[_type == "teamMember"]{
    _id,
    name,
    position,
    degree,
    "profile_image": profile_image.asset->url,
  }`;

	try {
		const teamMembers = await client.fetch(query);
		return teamMembers;
	} catch (error) {
		console.error("Error fetching Team Members:", error);
		return [];
	}
};

export const fetchLeadershipTeamMembers = async (): Promise<TeamMember[]> => {
	const query = `*[_type == "teamMember" && display_on_leadership_screen == true]{
    _id,
    name,
    position,
    degree,
    "profile_image": profile_image.asset->url,
    bio,
    quote,
    display_on_leadership_screen
  }`;

	try {
		const leadershipTeam = await client.fetch(query);
		return leadershipTeam;
	} catch (error) {
		console.error("Error fetching Leadership Team Members:", error);
		return [];
	}
};
