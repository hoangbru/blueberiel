'use client'

import { useActionState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Server Action file
'use server'

// Zod schema for form validation <sup>[1](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)</sup>&nbsp;
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })

    // Return errors if validation fails
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Invalid form data'
      }
    }

    // Simulate form submission (replace with actual backend logic)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success message
    return {
      success: true,
      message: 'Your message has been sent successfully!'
    }
  } catch (error) {
    return {
      errors: {},
      message: 'An unexpected error occurred'
    }
  }
}

// Client Component for the form
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    errors: {},
    message: null
  })

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className={state.errors?.name ? 'border-red-500' : ''}
          />
          {state.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className={state.errors?.email ? 'border-red-500' : ''}
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className={`w-full p-2 border rounded ${state.errors?.message ? 'border-red-500' : ''}`}
          />
          {state.errors?.message && (
            <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isPending} 
          className="w-full"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>

        {state.message && (
          <div className={`
            mt-4 p-3 rounded text-center 
            ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}>
            {state.message}
          </div>
        )}
      </form>
    </div>
  )
}