import React from 'react'
import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'

interface Props{
    status: Status
}

// il codice non accetta string come attributo per color, quindi invece di color:string assegnamo un range di valori che sono riconosciuti da color

const statusMap: Record<Status, {label : string, color: 'red' | 'orange' | 'green' }> = {
    OPEN: { label: 'Aperto', color: 'red'},
    IN_PROGRESS: { label: 'In Lavorazione', color: 'orange'},
    CLOSED: { label: 'Evaso', color: 'green'}
};

const StatusBadge = ({ status }: Props) => {
  return (
    <div>
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    </div>
  )
}

export default StatusBadge