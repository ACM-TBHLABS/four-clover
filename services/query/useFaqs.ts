import { FAQ } from "@/types/faqs";
import { useQuery } from "@tanstack/react-query";
import { fetchAllFAQs } from "../api/faqsService";

export const useFaqs = () => {
	return useQuery<FAQ[]>({
		queryKey: ["faqs"],
		queryFn: fetchAllFAQs,
	});
};
