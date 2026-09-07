import {
    BookOpenIcon,
    ChevronDownIcon,
    Home,
    LayoutDashboardIcon,
    LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSignOut } from "@/hooks/use-signout";


interface iAppProps {
    name: string;
    email: string;
    image?: string;
}

const UserDropdown = ({name, email, image}: iAppProps) => {
    const handleSignOut = useSignOut()
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
                    <Avatar>
                        <AvatarImage src={image} alt="Profile image" />
                        <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <ChevronDownIcon size={16} className="opacity-60" aria-hidden="true" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="max-w-64" >
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="flex min-w-0 flex-col gap-1">
                        <span className='text-foreground truncate text-sm font-medium'>
                            {name}
                        </span>
                        <p>{email}</p>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                    <DropdownMenuItem>
                        <Link href="/" className="flex text-center items-center space-x-1">
                            <Home size={16} className="opacity-60" aria-hidden="true" />
                            <span>Home</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/courses" className="flex text-center items-center space-x-1">
                            <BookOpenIcon size={16} className="opacity-60" aria-hidden="true" />
                            <span>Courses</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/dashboard" className="flex text-center items-center space-x-1">
                            <LayoutDashboardIcon size={16} className="opacity-60" aria-hidden="true" />
                            <span>Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={handleSignOut} className="flex items-center">
                        <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
                        <span>Log Out</span>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown