'use client'
import React from 'react'
import{TextField, Button} from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import axios from 'axios'
import 'easymde/dist/easymde.min.css'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })


interface TicketForm{
    title : string
    description : string
}

const NewIssuePage = () => {
    const router = useRouter()
    const {register, control, handleSubmit} = useForm<TicketForm>()
    return (
        <>
            <form 
            className='mx-4 max-w-[60%]' 
            onSubmit={handleSubmit(async(data) => { await axios.post('/api/issues', data); router.push('/issues')
            router.push('/issues')
            })}>
                <TextField.Root className='mb-4' >
                    <TextField.Input placeholder='Titolo' {...register('title')} />
                </TextField.Root>
                <Controller
                name='description'
                control={control}
                render={({ field }) => (
                    <SimpleMDE placeholder='Spiegazione dettagliata' {...field} />
                )}
                />
                <Button>Apri Ticket</Button>
            </form>
        </>
  )
}

export default NewIssuePage