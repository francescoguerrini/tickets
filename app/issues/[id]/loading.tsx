import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Heading, Text, Flex, Card, Box } from '@radix-ui/themes'
import StatusBadge from '../../components/StatusBadge'

const SingleTicketLoadingPage = () => {
  return (
    <Box>
      <Skeleton />
      <Flex gap='5' my='2'>
        <Skeleton width='5rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose'>
        <Skeleton count={3} />
      </Card> 
    </Box>
  )
}

export default SingleTicketLoadingPage