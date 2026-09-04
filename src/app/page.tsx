"use client"

import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function signOut()  {
    await authClient.signOut({
      fetchOptions: {
        onSuccess : () => {
          router.push('/')
          toast.success('Signed out successfully')
        }
      }
    })
  }

  function logIn() {
    return router.push('/login')
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Hello world
      <ToggleTheme />
      {
        session ? (
          <div>
            <p>{session.user.name }</p>
            <Button onClick={signOut} >Logout</Button> 
          </div>
        ): (
          <Button onClick={logIn}>Login</Button>
        )
      }
    </div>
  );
}
