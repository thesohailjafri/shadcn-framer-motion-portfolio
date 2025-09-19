'use server'

import { Resend } from 'resend'

import { env } from '@/env.mjs'
import { TFormSchema } from '@/lib/form-schema'
import { siteConfig } from './site-config'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: siteConfig.contact.email,
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    })

    return {
      data: 'Email sent successfully!',
    }
  } catch {
    return {
      error: `Something went wrong!`,
    }
  }
}
