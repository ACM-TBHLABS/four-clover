import { useQuery } from "@tanstack/react-query";
import { fetchAllPartnerships } from "../api/partnershipService";
import { Partnership } from "@/types/partnership";

export const usePartnerships = () => {
	return useQuery<Partnership[]>({
		queryKey: ["partnerships"],
		queryFn: fetchAllPartnerships,
	});
};
