import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { db } from "./db";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: 'postgresql',
    }),
    socialProviders: {
        github: {
            clientId: process.env.AUTH_GITHUB_CLIENT_ID!,
            clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET!,
        },
    },
});