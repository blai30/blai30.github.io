export type SocialLink = {
  label: string
  href: string
  // lucide-react icon name, resolved in SocialLinks/SiteHeader.
  icon: 'github' | 'linkedin' | 'mail' | 'file-text'
  handle: string
}

export type Skill = {
  name: string
  icon: string
  // Optional separate logo for dark mode (a real theme variant), shown in place of `icon`.
  iconDark?: string
  // Dark-mode filter for single colored logos that vanish on the dark canvas.
  dark?: 'invert' | 'white'
}

export type SkillGroup = {
  label: string
  items: Skill[]
}

export const site = {
  name: 'Brian Lai',
  title: 'Brian Lai',
  role: 'Software Engineer',
  location: 'San Francisco Bay Area',
  email: 'contact@brianlai.dev',
  url: 'https://blai30.github.io',
  // Default share image, resolved against `url`. Used when a page sets none.
  ogImage: '/favicon.png',
  tagline:
    'Software Engineer, Full-stack Web Developer, and Godot hobbyist from San Francisco Bay Area, CA.',
  description:
    'Brian Lai is a software engineer in the San Francisco Bay Area who specializes in building web applications and games. With a background in computer science and a passion for creating engaging user experiences, Brian has experience working with a variety of technologies including C#, .NET, React, TypeScript, Tailwind CSS, Godot Engine, and Unity Engine. He is dedicated to crafting high-quality applications that are both functional and enjoyable to use.',
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/blai30',
    icon: 'github',
    handle: '@blai30',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/blai/',
    icon: 'linkedin',
    handle: 'in/blai',
  },
  {
    label: 'Resume',
    href: 'https://blai30.github.io/resume/',
    icon: 'file-text',
    handle: '/resume',
  },
  {
    label: 'Email',
    href: 'mailto:contact@brianlai.dev',
    icon: 'mail',
    handle: 'contact@brianlai.dev',
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'C#', icon: 'csharp.svg' },
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
    ],
  },
  {
    label: 'Frameworks & Runtime',
    items: [
      { name: '.NET', icon: 'dotnet.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Next.js', icon: 'nextjs-light.svg', iconDark: 'nextjs-dark.svg' },
      { name: 'Node.js', icon: 'nodejs.svg' },
      { name: 'Astro', icon: 'astro-light.svg', iconDark: 'astro-dark.svg' },
      { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
      { name: 'Vite', icon: 'vite.svg' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'Supabase', icon: 'supabase.svg' },
    ],
  },
  {
    label: 'Game Engines',
    items: [
      { name: 'Godot', icon: 'godot.svg' },
      { name: 'Unity', icon: 'unity-light.svg', iconDark: 'unity-dark.svg' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Docker', icon: 'docker.svg' },
      { name: 'AWS', icon: 'aws-light.svg', iconDark: 'aws-dark.svg' },
      { name: 'Cloudflare', icon: 'cloudflare.svg' },
      { name: 'Figma', icon: 'figma.svg' },
    ],
  },
]
