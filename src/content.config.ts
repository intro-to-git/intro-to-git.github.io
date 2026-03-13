import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    state: z.enum(['covered', 'upcoming', 'draft']),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    links: z.record(z.string(), z.url()).optional(),
    hasSlides: z.boolean().default(true),
  }),
});

const bonus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/bonus' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    links: z.record(z.string(), z.url()).optional(),
    hasSlides: z.boolean().default(false),
  }),
});

const homeworks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/homeworks' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number(),
    links: z.record(z.string(), z.url()).optional(),
    hasSlides: z.boolean().default(false),
  }),
});

export const collections = { lessons, bonus, homeworks };
