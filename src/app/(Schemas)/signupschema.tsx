// schemas/signupSchema.ts
import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, "user name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
