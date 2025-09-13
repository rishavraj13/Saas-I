import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "./env";
import { github } from "better-auth/social-providers";
import { emailOTP } from "better-auth/plugins";
const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  providers: [
    github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],

  secret: env.BETTER_AUTH_SECRET,
  baseUrl: env.BETTER_AUTH_URL,

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp}) {
        
      },
    }),
  ],
});
