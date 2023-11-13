'use client'
import React, { useState } from 'react'
import{TextField, Button, Callout, Text} from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
// dymamic esegue un lazy loading del pacchetto
import dynamic from 'next/dynamic'
import axios from 'axios'
import {createIssueSchema} from '../../validationSchema'
import 'easymde/dist/easymde.min.css'
import Spinner from '../../components/Spinner'

// la funzione dynamic prende due argomenti, l'import e il comando di disabilitazione SSR
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })



type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
    const [error, setError] = useState('')
    const [active, setActive] = useState(false)
    const router = useRouter()
    const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>({
        resolver : zodResolver(createIssueSchema)
    })
    return (
        <div className='mx-4 max-w-[60%]'>
            <form  
            onSubmit={handleSubmit(async(data) => { 
                try {
                    setActive(true)
                    await axios.post('/api/issues', data); 
                    router.push('/issues')
                } catch (error) {
                    setActive(false)
                    setError('Errore nella trasmissione dei dati al backend')
                }
            })}>
                <TextField.Root className='mb-4' >
                    <TextField.Input placeholder='Titolo' {...register('title')} />
                </TextField.Root>
                {errors.title && <Text color='red'>{errors.title.message}</Text>}
                <Controller
                name='description'
                control={control}
                render={({ field }) => (
                    <SimpleMDE placeholder='Spiegazione dettagliata' {...field} />
                )}
                />
                {errors.description && <Text color='red'>{errors.description.message}</Text>}
                <Button disabled={active}>Apri Ticket{active && <Spinner />}</Button>
            </form>
            {error && <Callout.Root color='red' className='mt-4'>
            <Callout.Text>{error}</Callout.Text></Callout.Root>}
        </div>
  )
}

export default NewIssuePage