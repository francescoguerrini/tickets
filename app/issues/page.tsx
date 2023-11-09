import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'

const issues = () => {
  return (
    <div>
        <div className='text-slate-700 text-3xl p-12'>This is the issues page</div>
        <div className='p-8'><Button><Link href='/issues/new'>Cliccami</Link></Button></div>
    </div>
  )
}

export default issues