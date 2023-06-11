import { z } from "zod";

export const monthSchema = z.object({
  month: z.string().regex(/^\d+$/).transform(Number),
});