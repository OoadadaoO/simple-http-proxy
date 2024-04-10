import { z } from "zod";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const envSchema = z.object({
  PORT: z.string(),
  DOMAINS: z.array(z.string()),
});

type Env = z.infer<typeof envSchema>;

export const env: Env = {
  PORT: process.env.PORT || "3000",
  DOMAINS: process.env.DOMAINS
    ? process.env.DOMAINS.split(",")
    : ["www.google.com"],
};

envSchema.parse(env);
