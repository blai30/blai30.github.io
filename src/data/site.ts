export type SocialLink = {
  label: string
  href: string
  // lucide-react icon name, resolved in SocialLinks/SiteHeader.
  icon: 'github' | 'linkedin' | 'mail' | 'rss' | 'file-text'
  handle: string
}

export type Skill = {
  name: string
  // Iconify name for the brand logo, e.g. 'logos:react'.
  // A 'simple-icons:*' name is monochrome and gets tinted to the foreground color.
  icon: string
  // Optional separate logo for dark mode (a real theme variant), shown in place of `icon`.
  iconDark?: string
  // Dark-mode filter for single colored logos.
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
  email: 'brianlai30@outlook.com',
  url: 'https://blai30.github.io',
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
    href: 'mailto:brianlai30@outlook.com',
    icon: 'mail',
    handle: 'brianlai30@outlook.com',
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'C#', icon: 'logos:c-sharp' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
    ],
  },
  {
    label: 'Frameworks & Runtime',
    items: [
      { name: '.NET', icon: 'logos:dotnet' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', dark: 'invert' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Astro', icon: 'logos:astro-icon', iconDark: 'simple-icons:astro' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Vite', icon: 'logos:vite-icon', iconDark: 'logos:vite-icon-dark' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL', icon: 'logos:mysql-icon', dark: 'white' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Supabase', icon: 'logos:supabase-icon' },
    ],
  },
  {
    label: 'Game Engines',
    items: [
      { name: 'Godot', icon: 'logos:godot-icon' },
      { name: 'Unity', icon: 'simple-icons:unity' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'AWS', icon: 'logos:aws', dark: 'white' },
      { name: 'Figma', icon: 'logos:figma' },
    ],
  },
]
