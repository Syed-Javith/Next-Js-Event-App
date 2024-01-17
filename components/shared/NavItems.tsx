"use client"
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex gap-2 text-white">
        {
          headerLinks.map((link) => {
            const isActive = pathName == link.route;
            return <li><Link className={`${
              isActive && 'text-primary-500'
            }` } href={link.route}>{link.label}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default NavItems
