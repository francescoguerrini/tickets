import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'

const links = [
    {'label' : 'Dashboard', 'href' : '/' },
    {'label' : 'Issues', 'href' : '/issues' }
]

const Navbar = () => {
    // genera una navbar i cui link vengono mappati dall'array links definito sopra.
  return (
    <div className='flex h-16 items-center pl-6 px-24 border-b'>
        <Link href='/'><AiFillBug className='text-2xl hover:text-teal-500 transition-colors'/></Link>
        <ul className='flex space-x-6 pl-6'>
            {links.map(link => <Link key={link.href} href={link.href} className='text-zinc-500 text-lg hover:text-zinc-800 transition-colors'>{link.label}</Link>)}
        </ul>
    </div>
  )
}

export default Navbar