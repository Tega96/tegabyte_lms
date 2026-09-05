"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2, Verified } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
// import { Suspense } from 'react'




const VerifyRequest = () => {
    const router = useRouter();
    const [otp, setOtp] = useState('')
    const [verifyOtpPending, startVerifyOtpTransition] = useTransition();
    
    const params = useSearchParams();
    const email = params.get("email") as string;

    const isOtpCompleted = otp.length === 6;

    const verifyOtp = () => {
        if (!email) {
            toast.error("Missing email. Please request a new code");
            return;
        }

        startVerifyOtpTransition( async () => {
            await authClient.signIn.emailOtp({
                email: email,
                otp: otp,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success('Email verified successfully')
                        router.push('/')
                    },
                    onError: (ctx: any) => {
                        toast.error(ctx.error.message || 'Email verification failed');
                    }
                }
            })
        })
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl"> Please check your email</CardTitle>
                <CardDescription>
                    We have sent a verification code to your email address.
                    Please open your email and paste the code below.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col items-center space-y-2">
                    <InputOTP 
                        value={otp}
                        onChange={(value) => setOtp(value)}
                        maxLength={6}
                        className="gap-2"
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <p className="text-xs text-muted-foreground">Enter the 6 digits sent to your email</p>
                </div>
                <Button
                    onClick={verifyOtp}
                    disabled={verifyOtpPending || !isOtpCompleted}
                >
                    {verifyOtpPending ? (
                        <div className="flex text-center gap-2">
                            <Loader2 className="size-4 animate-rotate" />
                            <span className="">Loading...</span>
                        </div>
                    ) : (
                        <div className="flex text-center gap-2 justify-center">
                            <Verified className="size-4" />
                            <p>Verify Account</p>
                        </div>
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}
export default VerifyRequest;