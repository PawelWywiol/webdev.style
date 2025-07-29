import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = {
  docs,
};
