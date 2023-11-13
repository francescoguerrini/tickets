import React from 'react'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const EditButton = ({ ticketId }: { ticketId: number}) => {
  return (
    <Button>
        <Pencil2Icon />
        <Link href={`/issues/${ticketId}/edit`}>Modifica</Link>
    </Button>
  )
}

export default EditButton