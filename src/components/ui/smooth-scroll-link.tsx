import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'
import { cn } from '@/lib/utils'
import * as React from 'react'

const smoothScrollLinkVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-foreground hover:text-primary',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        underline:
          'text-foreground hover:text-primary underline-offset-4 hover:underline',
        button: 'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface SmoothScrollLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof smoothScrollLinkVariants> {
  href: string
  offset?: number
  asChild?: boolean
}

const SmoothScrollLink = React.forwardRef<
  HTMLAnchorElement,
  SmoothScrollLinkProps
>(
  (
    {
      className,
      variant,
      size,
      href,
      offset = 0,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { scrollToElement } = useSmoothScroll()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if it's an internal anchor link
      if (href.startsWith('#')) {
        e.preventDefault()
        const elementId = href.slice(1) // Remove the # symbol
        scrollToElement(elementId, { offset })
      }
      // For external links or Next.js routes, let the default behavior handle it
    }

    if (asChild) {
      return (
        <Link
          ref={ref}
          href={href}
          className={cn(smoothScrollLinkVariants({ variant, size, className }))}
          onClick={handleClick}
          {...props}
        >
          {children}
        </Link>
      )
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(smoothScrollLinkVariants({ variant, size, className }))}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    )
  },
)

SmoothScrollLink.displayName = 'SmoothScrollLink'

export { SmoothScrollLink, smoothScrollLinkVariants }
