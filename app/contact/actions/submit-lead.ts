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
    // Extract Router.so fields
    const payload = {
      "Name": formData.get("Name")?.toString() || "",
      "Phone Number": formData.get("Phone Number")?.toString() || "",
      "Email": formData.get("Email")?.toString() || "",
      "Street Address": formData.get("Street Address")?.toString() || "",
      "Zip Code": formData.get("Zip Code")?.toString() || "",
      "Service requested?": formData.get("Service requested?")?.toString() || "",
    }

    // Validate user input
    const validatedFields = formSchema.safeParse(payload)

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Please correct the errors and try again.",
      }
    }

    // --- POST to Router.so ---
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
      let errorDetails: unknown = undefined
      try {
        errorDetails = await response.json()
      } catch {
        try {
          errorDetails = await response.text()
        } catch {
          errorDetails = "Unknown error"
        }
      }
      console.error("Router.so API Error:", errorDetails)
      return {
        errors: undefined,
        message: "An error occurred while submitting your request. Please try again later.",
      }
    }

    // --- POST to Zapier (don't block user if Zapier fails) ---
    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch (zapError) {
      console.error("Zapier webhook failed:", zapError)
      // Do not return, just log the error
    }

    return {
      errors: undefined,
      message: "Thank you for your submission! We will be in touch shortly.",
    }
  } catch (error: unknown) {
    console.error("Fetch Error:", error)
    return {
      errors: undefined,
      message: "A network error occurred. Please check your connection and try again.",
    }
  }
}
