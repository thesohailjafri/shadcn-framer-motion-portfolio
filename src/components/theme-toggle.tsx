'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

type ThemeToggleProps = {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="size-5 dark:hidden" />
      <Icons.moon className="hidden size-5 dark:block" />
    </Button>
  )
}
