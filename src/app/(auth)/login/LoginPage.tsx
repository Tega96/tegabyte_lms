"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GitForkIcon, Loader } from "lucide-react"

import { authClient } from "@/lib/auth-client"
import { toast } from 'sonner'
import { useTransition } from "react"


const LoginPage = () => {

    const [githubPending, startGithubTransition] = useTransition();

    const signInWithGithub = () => {
        startGithubTransition( async () => {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Signed in with Github. You'll be redirected...")
                    },
                    onError: () => {
                        toast.error("Internal server error")
                    }
                }
            })
        });
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome back!</CardTitle>
                <CardDescription>Login to continue</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Button 
                    className="w-full" variant="outline"
                    onClick={signInWithGithub} 
                    disabled={githubPending} 
                >
                    {githubPending ? (
                        <>
                            <Loader className="size-4 animate-spin" />
                            <span>Loading...</span>
                        </>
                    ) : (    
                        <>
                            <GitForkIcon className="size-4" />
                            Login with github
                        </>
                    )}
                    
                </Button>

                <div className="relative text-sm text-center after:absolute after:border-t after:border-border after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center">
                    <span className="relative z-10 text-muted-foreground bg-card px-2">or continue with</span>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="Please, enter your email" id="email" name="email" />
                    </div>

                    <Button className="w-full p-2">
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginPage