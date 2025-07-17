"use server"

import { formSchema } from "@/lib/schemas/lead-form-schema"

type FormState = {
  message: string
  errors?: Record<string, string[]>
}

const ROUTERSO_API_KEY = process.env.ROUTERSO_API_KEY!
const ROUTERSO_ENDPOINT = process.env.ROUTERSO_ENDPOINT!
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL!

export async function submitLead(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Build payload: explicitly extract and fallback to empty string
    const name = formData.get("Name")?.toString() || ""
    const phoneNumber = formData.get("Phone Number")?.toString() || ""
    const email = formData.get("Email")?.toString() || ""
    const streetAddress = formData.get("Street Address")?.toString() || ""
    const zipCode = formData.get("Zip Code")?.toString() || ""
    const serviceRequested = formData.get("Service requested?")?.toString() || ""

    // Explicitly build the payload with exact Router.so keys
    const payload = {
      "Name": name,
      "Phone Number": phoneNumber,
      "Email": email,
      "Street Address": streetAddress,
      "Zip Code": zipCode,
      "Service requested?": serviceRequested
    }

    // Log payload for troubleshooting
    console.log("ROUTERSO ENDPOINT:", ROUTERSO_ENDPOINT)
    console.log("ROUTERSO API KEY:", ROUTERSO_API_KEY)
    console.log("Payload about to POST:", JSON.stringify(payload))
    console.log("Headers about to send:", {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ROUTERSO_API_KEY}`
    })

    // Validate user input
    const validatedFields = formSchema.safeParse(payload)
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Please correct the errors and try again.",
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
    )

        if (!response.ok) {
          // Handle error response from Router.so
          return {
            message: "Failed to submit lead. Please try again later.",
            errors: { server: ["Failed to submit lead."] }
          }
        }
    
        // Optionally, POST to Zapier webhook (if needed)
        if (ZAPIER_WEBHOOK_URL) {
          await fetch(ZAPIER_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        }
    
        return {
          message: "Lead submitted successfully!",
        }
      } catch (error) {
        return {
          message: "An unexpected error occurred. Please try again.",
          errors: { server: [error instanceof Error ? error.message : "Unknown error"] }
        }
      }
    }
