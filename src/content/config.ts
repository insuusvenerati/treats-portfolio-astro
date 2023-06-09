import { defineCollection, z } from "astro:content";

const metadataCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  metadata: metadataCollection,
};
