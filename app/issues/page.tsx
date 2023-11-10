import React from 'react'
import {Button, Table} from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '../../prisma/client'
import StatusBadge from '../components/statusBadge'

const issues = async () => {
  const issues = await prisma.issue.findMany()
  return (
    <div>
        <div className='text-slate-700 text-3xl py-12 px-6'>This is the issues page</div>
        <div className='p-6'><Button><Link href='/issues/new'>Nuovo Ticket</Link></Button></div>
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