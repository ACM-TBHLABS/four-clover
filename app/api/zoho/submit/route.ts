import { getZohoAccessToken } from "@/lib/zoho";

export async function POST(req: Request) {
	try {
		// Parse the incoming JSON data from the request body
		const formData = await req.json();
		const accessToken = await getZohoAccessToken();
		console.log("Access Token:", accessToken);
		const orgId = process.env.ZOHO_ORG_ID!;
		const baseUrl = process.env.ZOHO_API_BASE_URL!;

		// Structure the data for Zoho Books custom module
		const zohoData = {
			cf_name: formData.cf_name,
			cf_email: formData.cf_email,
			cf_event_name: formData.cf_event_name,
			cf_phone_number: formData.cf_phone_number,
			cf_job_title: formData.cf_job_title,
		};

		// Log the data to make sure it's correct
		console.log("Data to send to Zoho:", zohoData);

		// Construct the full Zoho API URL
		const zohoApiUrl = `${baseUrl}/books/v3/cm_event_registration?organization_id=${orgId}`;
		console.log("Zoho API URL:", zohoApiUrl);

		// Send the data to Zoho Books custom module
		const zohoRes = await fetch(zohoApiUrl, {
			method: "POST",
			headers: {
				Authorization: `Zoho-oauthtoken ${accessToken}`,
				"Content-Type": "application/json;charset=UTF-8",
				"X-com-zoho-books-organizationid": orgId,
			},
			body: JSON.stringify(zohoData),
		});

		const json = await zohoRes.json();

		// Log the response from Zoho API
		console.log("Zoho Response:", json);

		if (!zohoRes.ok) {
			console.error("Zoho API error:", json);
			return new Response(
				JSON.stringify({ message: "Zoho request failed", error: json }),
				{ status: zohoRes.status }
			);
		}

		return new Response(JSON.stringify(json), { status: 200 });
	} catch (err) {
		console.error("Unexpected error:", err);
		return new Response(
			JSON.stringify({ message: "Zoho request failed", error: err }),
			{ status: 500 }
		);
	}
}
