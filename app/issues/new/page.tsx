'use client'
import React from 'react'
import{TextField, TextArea, Button} from '@radix-ui/themes'
const NewIssuePage = () => {
  return (
    <div className='mx-4 max-w-[60%]'>
        <TextField.Root >
            <TextField.Input placeholder='Titolo' />
        </TextField.Root>
        <TextArea className='my-4' placeholder='Spiegazione dettagliata' />
        <Button>Apri Ticket</Button>
    </div>
  )
}

export default NewIssuePage