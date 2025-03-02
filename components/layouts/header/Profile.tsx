import { logout } from "@/app/api/Auth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
  

const Profile = () => {
  const handleLogout = async () => {
    logout().then(()=>{
      window.location.reload()
    })
  }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild><h1>profile</h1></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={"/profile"}>
                <DropdownMenuItem>
                  profile
                </DropdownMenuItem>
                </Link>
              <Link href={"/orders"}>
                <DropdownMenuItem>
                  orders
                </DropdownMenuItem>
              </Link>
              <h1 className="font-bold cursor-pointer" onClick={()=>handleLogout()}>
                <DropdownMenuItem>
                    sign out
                </DropdownMenuItem>
              </h1>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile