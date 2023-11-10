'use client'
import React from 'react'
import{TextField, Button} from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const NewIssuePage = () => {
  return (
    <div className='mx-4 max-w-[60%]'>
        <TextField.Root >
            <TextField.Input placeholder='Titolo' />
        </TextField.Root>
        <SimpleMDE className='my-4' placeholder='Spiegazione dettagliata' />
        <Button>Apri Ticket</Button>
    </div>
  )
}

export default NewIssuePage