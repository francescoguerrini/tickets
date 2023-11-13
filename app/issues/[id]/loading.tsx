import React from 'react'
// quando importiamo lo skeleton, ricordiamoci il suo css
import { Skeleton } from '../../components'
import { Flex, Card, Box } from '@radix-ui/themes'

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