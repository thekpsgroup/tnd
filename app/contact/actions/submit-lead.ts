"use server"

type FormState = {
  message: string
  errors?: Record<string, string[]>
}

// Put your API key and endpoint directly if you want (or use env vars as shown before)
const ROUTERSO_API_KEY = "909b23f43d76e012a97e7759040f49e75ac8767be421f1bc5021a18f37a5483d";
const ROUTERSO_ENDPOINT = "https://app.router.so/api/endpoints/ee69bkct";

export async function submitLead(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Build the payload with exact field names from Router.so
    const payload = {
      "Name": formData.get("Name") || "",
      "Phone Number": formData.get("Phone Number") || "",
      "Email": formData.get("Email") || "",
      "Street Address": formData.get("Street Address") || "",
      "Zip Code": formData.get("Zip Code") || "",
      "Service requested?": formData.get("Service requested?") || ""
    };

    // Log payload for debugging
    console.log("Payload about to POST:", JSON.stringify(payload));

    // Ensure all fields are present
    for (const [key, value] of Object.entries(payload)) {
      if (!value) {
        return {
          errors: { [key]: ["This field is required."] },
          message: `The field "${key}" is required.`,
        }
      }
    }

    // POST to Router.so
    const response = await fetch(
      ROUTERSO_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ROUTERSO_API_KEY}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      let errorDetails: unknown = undefined;
      try {
        errorDetails = await response.json();
      } catch {
        try {
          errorDetails = await response.text();
        } catch {
          errorDetails = "Unknown error";
        }
      }
      console.error("Router.so API Error:", errorDetails);
      return {
        errors: undefined,
        message: "An error occurred while submitting your request. Please try again later.",
      };
    }

    return {
      errors: undefined,
      message: "Thank you for your submission! We will be in touch shortly.",
    }
  } catch (error: unknown) {
    console.error("Fetch Error:", error);
    return {
      errors: undefined,
      message: "A network error occurred. Please check your connection and try again.",
    }
  }
}
