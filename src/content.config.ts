import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    state: z.enum(['covered', 'upcoming', 'draft']),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    links: z.record(z.string()).optional(),
    hasSlides: z.boolean().default(true),
  }),
});

const bonus = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    links: z.record(z.string()).optional(),
    hasSlides: z.boolean().default(false),
  }),
});

export const collections = { lessons, bonus };
