import { z } from "zod"

export const formSchema = z.object({
  "Name": z.string().min(2, "Name must be at least 2 characters."),
  "Phone Number": z.string().regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number (include country code)."),
  "Email": z.string().email("Please enter a valid email address."),
  "Street Address": z.string().min(5, "Please enter a valid street address."),
  "Zip Code": z.string().regex(/^\d{5}$/, "Please enter a valid 5-digit zip code."),
  "Service requested?": z.string().min(3, "Please select a service."),
})
