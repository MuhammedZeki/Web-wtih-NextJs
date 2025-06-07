import React from 'react'
import NavItem from './NavItem';

interface NavMenuBarProps {
    links: { name: string; path: string }[];
}

const NavMenuBar = ({ links }: NavMenuBarProps) => {
    return (
        <div className='flex flex-col py-4 items-center z-10 bg-mycolor-400'>
            {links.map((link, i) => (
                <NavItem key={i} href={link.path} name={link.name} />
            ))}
        </div>
    )
}

export default NavMenuBar