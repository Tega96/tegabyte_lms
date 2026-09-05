"use client"

import Logo from '@/../public/logo.png'
import { buttonVariants } from '@/components/ui/button'
import { ToggleTheme } from '@/components/ui/toggle-theme'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/lib/data'
import UserDropdown from './UserDropdown'


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
            <div className="container flex min-h-16 items-center justify-between mx-auto px-4 md:px-6 lg:px-8">
                <Link
                    className="flex items-center space-x-2 mr-4"
                    href="/"
                >
                    <Image src={Logo} alt="Logo" className="size-9" />
                    <span className="font-bold">TegabyteLMS</span>
                </Link>
            
                {/**Desktop navigation */}
                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="flex item-center space-x-2">
                        {navItems.map((item) => (
                            <Link 
                                href={item.href}
                                key={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className='flex gap-2 items-center justify-center'>
                    <ToggleTheme />
                    {isPending ? null : session ? (
                        <UserDropdown 
                            email={session.user.email}
                            name={session.user.name}
                            image={session.user.image || ""}
                        />
                    ): (
                        <Link href="/login" className={buttonVariants({variant: "secondary"})}> 
                            Get started
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Navbar