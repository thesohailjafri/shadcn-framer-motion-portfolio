import { links } from '@/lib/data'

export type SectionName = (typeof links)[number]['name']

export type Project = {
  video: string
  title: string
  description: string
  technologies: string[]
  links: {
    preview: string
    github: string
    githubApi: string
  }
}

export type Experience = {
  title: string
  company: string
  description: string
  period: string
  technologies: string[]
}

export type Link = {
  name: string
  hash: string
}

export type Skill = {
  name: string
  icon: React.ReactNode
}
