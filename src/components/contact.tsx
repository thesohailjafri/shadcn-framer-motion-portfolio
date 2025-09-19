'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Icons } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { useSectionInView } from '@/hooks/use-section-in-view'
import { sendEmailAction } from '@/lib/actions'
import { formSchema, TFormSchema } from '@/lib/form-schema'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ErrorLine } from './ui/error-line'
import { Label } from './ui/label'
import { siteConfig } from '@/lib/site-config'

export const Contact = () => {
  const { ref } = useSectionInView('Contact')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendEmailAction(values)

    if (error) {
      toast.error(error)
      return
    }

    toast.success(data)
    reset()
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href={siteConfig.contact.email}>
                {siteConfig.contact.email}
              </Link>
            </Button>{' '}
            or through this form.
          </>
        }
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl">
          <Label
            htmlFor="email"
            className={cn(errors.email?.message && 'text-destructive')}
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="hello@gmail.com"
            {...register('email')}
            className={cn(errors.email?.message && 'border-destructive')}
          />
          <ErrorLine message={errors.email?.message} />
        </div>
        <div className="w-full max-w-xl">
          <Label
            htmlFor="message"
            className={cn(errors.message?.message && 'text-destructive')}
          >
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Hello! What's up?"
            {...register('message')}
            className={cn(errors.message?.message && 'border-destructive')}
          ></Textarea>
          <ErrorLine message={errors.message?.message} />
        </div>
        <Button size="lg">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  )
}
