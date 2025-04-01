export interface FAQ {
	_id: string;
	question: string;
	answer: string;
	ref_links?: string[]; // Array of valid URLs
}
