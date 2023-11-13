import React from 'react'
import prisma from '../../../prisma/client'
import {notFound} from 'next/navigation'
import { Grid, Box } from '@radix-ui/themes'
import EditButton from './EditButton'
import TicketDetail from './TicketDetail'

interface Props{
    params: {id: string}
}

const TicketDetailPage = async ({ params }: Props) => {
    // if (typeof params.id !== 'number') notFound();

    const issue= await prisma.issue.findUnique({
        where: {id: parseInt(params.id)} 
        });

        if (!issue)
            return notFound();

        return (
            <Grid columns='2'>
                <Box>
                   <TicketDetail issue={issue}/>
                </Box>
                <Box>
                    <EditButton ticketId={issue.id} />
                </Box>
            </Grid>
            )
}

export default TicketDetailPage