import React from 'react'
import prisma from '../../../prisma/client'
import {notFound} from 'next/navigation'
import { Heading, Text, Flex, Card } from '@radix-ui/themes'
import StatusBadge from '../../components/StatusBadge'
//react-markdown permette renderizzazione e preview di stili es.corsivo/grassetto/...
import ReactMarkdown from 'react-markdown'
import delay from 'delay'

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

        await delay(2000)

        return (
            <div>
                <Heading>{issue.title}</Heading>
                <Flex gap='5' my='2'>
                    <StatusBadge status={issue.status} /> 
                    <Text>{issue.createdAt.toDateString()}</Text>
                </Flex>
                {/* La classe prose serve da tailwind typography è per visualizzare stili grafici complessi come liste puntate/ecc.. */}
                <Card className='prose'>
                    <ReactMarkdown>{issue.description}</ReactMarkdown>
                </Card> 
            </div>
            )
}

export default TicketDetailPage