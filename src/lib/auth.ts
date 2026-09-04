import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { db } from "./db";
import { emailOTP } from 'better-auth/plugins'
import { resend } from './resend'


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
    
    plugins: [
        emailOTP({
            async sendVerificationOTP({ email, otp }) { 
                console.log("Sending OTP", otp, "to", email)
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: [email],
                    subject: 'Tegabyte LMS - Verify your email',
                    html: `<p>Welcome to Tegabyte LMS. Your Otp is<strong>${otp}</strong>!</p>`
                });
            },
            expiresIn: 300,
        }),
    ]
});