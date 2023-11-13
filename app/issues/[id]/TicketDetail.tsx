import React from 'react'
import { Issue } from '@prisma/client'
import { Heading, Text, Flex, Card } from '@radix-ui/themes'
import StatusBadge from '../../components/StatusBadge'
//react-markdown permette renderizzazione e preview di stili es.corsivo/grassetto/...
import ReactMarkdown from 'react-markdown'

const TicketDetail = ({ issue }: {issue: Issue}) => {
  return (
    <>
        <Heading>{issue.title}</Heading>
        <Flex gap='5' my='2'>
            <StatusBadge status={issue.status} /> 
            <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        {/* La classe prose serve da tailwind typography è per visualizzare stili grafici complessi come liste puntate/ecc.. */}
        <Card className='prose'>
            <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card> 
    </>
  )
}

export default TicketDetail