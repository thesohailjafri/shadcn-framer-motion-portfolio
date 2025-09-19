import { Bricolage_Grotesque, Darker_Grotesque } from 'next/font/google'

const fontSans = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const fonts = [fontSans.variable, fontHeading.variable]
