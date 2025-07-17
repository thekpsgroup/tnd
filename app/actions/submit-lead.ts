"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  streetAddress: z.string().min(5, { message: "Please enter a valid street address." }),
  zipCode: z.string().regex(/^\d{5}$/, { message: "Please enter a valid 5-digit zip code." }),
  serviceRequested: z.string().min(3, { message: "Please select a service." }),
})

export async function submitLead(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    streetAddress: formData.get("streetAddress"),
    zipCode: formData.get("zipCode"),
    serviceRequested: formData.get("serviceRequested"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    }
  }

  const { name, phoneNumber, email, streetAddress, zipCode, serviceRequested } = validatedFields.data

  const payload = {
    Name: name,
    "Phone Number": phoneNumber,
    Email: email,
    "Street Address": streetAddress,
    "Zip Code": zipCode,
    "Service requested?": serviceRequested,
  }

  try {
    const response = await fetch("https://app.router.so/api/endpoints/ee69bkct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 909b23f43d76e012a97e7759040f49e75ac8767be421f1bc5021a18f37a5483d",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("API Error:", errorData)
      return { message: "An error occurred. Please try again later." }
    }

    return { message: "Thank you for your submission! We will be in touch shortly." }
  } catch (error) {
    console.error("Fetch Error:", error)
    return { message: "A network error occurred. Please try again later." }
  }
}
