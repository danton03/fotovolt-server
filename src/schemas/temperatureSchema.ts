import { z } from "zod";

export const temperatureSchema = z.object({
  temperature: z.number(),
});