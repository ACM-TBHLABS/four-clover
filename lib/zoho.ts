export async function getZohoAccessToken() {
	// Check if envs are defined (helps avoid silent failures in prod)
	const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
	const clientId = process.env.ZOHO_CLIENT_ID;
	const clientSecret = process.env.ZOHO_CLIENT_SECRET;

	if (!refreshToken || !clientId || !clientSecret) {
		console.error("❌ Missing Zoho environment variables");
		throw new Error("Missing Zoho environment variables");
	}

	try {
		const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				refresh_token: refreshToken,
				client_id: clientId,
				client_secret: clientSecret,
				grant_type: "refresh_token",
			}),
		});

		const data = await res.json();

		if (!res.ok) {
			console.error("❌ Zoho token request failed:", data);
			throw new Error(
				data.error || "Failed to get access token from Zoho"
			);
		}

		if (!data.access_token) {
			console.error("❌ No access_token received from Zoho:", data);
			throw new Error("Access token missing in Zoho response");
		}

		return data.access_token;
	} catch (err) {
		console.error("❌ Error in getZohoAccessToken():", err);
		throw err;
	}
}
