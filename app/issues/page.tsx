import React from 'react'
import { Table} from '@radix-ui/themes'
import prisma from '../../prisma/client'
import StatusBadge from '../components/statusBadge'
import TicketActions from './ticketActions'
import delay from 'delay'


const issues = async () => {
  const issues = await prisma.issue.findMany()
  await delay(2000)
  return (
    <div>
        <TicketActions />
        <div className='py-8 max-w-[80%] pl-4'>
          <Table.Root className='border-2 rounded-lg shadow-md'>
            <Table.Header className='bg-slate-100'>
              <Table.Row>
                <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {issues.map(issue=>(
                <Table.Row key={issue.id}>
                  <Table.Cell>{issue.title}</Table.Cell>
                  <Table.Cell><StatusBadge status={issue.status} /></Table.Cell>
                  <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>

    </div>
  )
}

export default issues