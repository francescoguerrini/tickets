'use client'
import React from 'react'
import{TextField, TextArea, Button} from '@radix-ui/themes'
const NewIssuePage = () => {
  return (
    <div>
        <TextField.Root>
            <TextField.Input placeholder='Titolo' />
        </TextField.Root>
        <TextArea placeholder='scrivi qualcosa'/>
        <Button>Apri Ticket</Button>
    </div>
  )
}

export default NewIssuePage