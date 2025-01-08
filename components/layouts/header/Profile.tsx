import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { SignOutButton } from "@clerk/nextjs"
  

const Profile = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger><h1>profile</h1></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>profile</DropdownMenuItem>
            <DropdownMenuItem>orders</DropdownMenuItem>
            <DropdownMenuItem>
                <SignOutButton><h1 className="font-bold">sign out</h1></SignOutButton>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile