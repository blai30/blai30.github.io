import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

// Project articles: no date required, sorted alphabetically by title.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    // Path under /public, e.g. '/thumbnails/foo.svg'.
    thumbnail: z.string().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    archived: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
})

// Blog posts: a publish date is required.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { projects, blog }
