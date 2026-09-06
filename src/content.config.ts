import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
    // Each post is a folder: index.md plus the images it uses.
    loader: glob({ pattern: '**/index.md', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            tags: z.array(z.string()).default([]),
            draft: z.boolean().default(false),
            // Optional lead image, shown on the post and in the list.
            cover: image().optional(),
            coverAlt: z.string().optional(),
        }),
})

export const collections = { blog }
