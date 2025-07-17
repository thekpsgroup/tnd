"use client"

import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"
import { submitLead } from "@/app/contact/actions/submit-lead"

export function LeadForm() {
  const form = useForm({
    defaultValues: {
      "Name": "",
      "Phone Number": "",
      "Email": "",
      "Street Address": "",
      "Zip Code": "",
      "Service requested?": "",
    }
  })

  const [state, formAction] = useActionState(submitLead, { message: "", errors: undefined })

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Phone Number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+19036034150" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Street Address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Zip Code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="75189" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Service requested?"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Requested</FormLabel>
              <FormControl>
                <Input placeholder="Bathrooms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="btn btn-primary w-full">Submit</button>
        {state.message && (
          <div className={state.errors ? "text-red-600 mt-2" : "text-green-600 mt-2"}>
            {state.message}
          </div>
        )}
        {state.errors && (
          <pre className="text-xs text-red-600 mt-2">{JSON.stringify(state.errors, null, 2)}</pre>
        )}
      </form>
    </Form>
  )
}
