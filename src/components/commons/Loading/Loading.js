import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const Loading = ({children}) => {
  return (
    <Skeleton
        variant={'rectangular'} 
        animation={'wave'}>{children}</Skeleton>
  )
}

export default Loading