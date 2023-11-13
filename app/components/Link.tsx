// Creiamo un Link custom con la navigazione di next/link(no page refresh) e lo schema di colori da radix


import React from 'react'
import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes'

interface Props{
    href: string;
    children: string;
}

const Link = ({href, children} : Props) => {
  return (
    // per passare a next/link un children con <a> all'interno usiamo le proprietà passHref legacyBehavior
    <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
    </NextLink>
  )
}

export default Link