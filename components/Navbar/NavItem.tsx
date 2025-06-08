import Link from 'next/link'
import React from 'react'

interface NavItemProps {
  href: string,
  name: string,
}

const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <Link href={href} className='block py-2 pl-3
   text-mycolor-700 text-md hover:text-white/80 '>
      {name}
    </Link>
  )
}

export default NavItem