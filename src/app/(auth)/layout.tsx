import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="relative flex min-h-svh flex-col gap-6 justify-center items-center">
            <div className="absolute top-4 left-4">
                <Link href="/" className={buttonVariants({
                    variant: "link",
                    className: ""
                })}>
                    <ArrowLeftIcon className="size-4" />
                    Back
                </Link>
            </div>

            
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link 
                    href="/" 
                    className="flex gap-2 items-center self-center font-medium"
                >
                    <Image src={Logo} alt="Logo" width={24} height={24} />
                    <h2 className="text-lg">Tegabyte Academy</h2>
                </Link>
                {children}
            </div>

            <footer className="text-balance text-center text-xs text-muted-foreground ">
                By clicking continue, you agree to our{" "}
                <span className="hover:text-primary hover:underline"> 
                    Terms and conditions
                </span> {" "}and {" "}
                <span className="hover:text-primary hover:underline">
                    Privacy policy
                </span>
            </footer>
        </div>
    )
}
export default AuthLayout;