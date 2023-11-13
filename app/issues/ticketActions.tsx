import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'

const TicketActions = () => {
  return (
    <div>
        <div className='text-slate-700 text-3xl py-12 px-6'>This is the issues page</div>
        <div className='p-6'><Button><Link href='/issues/new'>Nuovo Ticket</Link></Button></div>
    </div>
  )
}

export default TicketActions