import React from 'react'
import {Button} from '@mui/material';

const CommonButton = ({children, color, disabled, size, sx, variant, onClick}) => {
  return (
    <Button
    color={color}
    diabled={disabled}
    size={size}
    sx={sx}
    variant={variant}
    onClick={onClick}
    >{children}</Button>
  )
}

export default CommonButton