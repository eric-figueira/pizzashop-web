import z from "zod";

const schema = z.object({
  VITE_API_URL: z.url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true')
})

export const env = schema.parse(import.meta.env)
