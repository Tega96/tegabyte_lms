"use client"

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import  { features } from "@/lib/data"






export default function Home() {
  // const router = useRouter();
  // const { data: session } = authClient.useSession();

  // async function signOut()  {
  //   await authClient.signOut({
  //     fetchOptions: {
  //       onSuccess : () => {
  //         router.push('/')
  //         toast.success('Signed out successfully')
  //       }
  //     }
  //   })
  // }

  // function logIn() {
  //   return router.push('/login')
  // }

  return (
    <div>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">
            The future of Online Education
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your learning experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              href="/courses" 
              className={buttonVariants({
                size: 'lg',
              })}
            >
              Explore Courses
            </Link>

            <Link 
              href="/login" 
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',

              })}
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-2 space-x-2">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
