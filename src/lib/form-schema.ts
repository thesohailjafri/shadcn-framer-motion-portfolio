import { z } from 'zod'

export const formSchema = z.object({
  email: z.email().min(1, { message: 'Email is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
})

export type TFormSchema = z.infer<typeof formSchema>
