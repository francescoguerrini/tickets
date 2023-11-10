'use client'
import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'


const links = [
    {label : 'Dashboard', href : '/' },
    {label : 'Tickets', href : '/issues' }
]

const Navbar = () => {
    // genera una navbar i cui link vengono mappati dall'array links definito sopra.
    const currentPath = usePathname();
  return (
    <div className='mb-4 flex h-16 items-center pl-6 px-24 border-b'>
        <Link href='/'><AiFillBug className='text-2xl hover:text-teal-500 transition-colors'/></Link>
        <ul className='flex space-x-6 pl-6'>
            {links.map(link => <Link key={link.href}
            href={link.href} 
            className={classnames({
                'text-zinc-900 font-bold': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
            })}>
                {link.label}
            </Link>
            )}
        </ul>
    </div>
  )
}

export default Navbar