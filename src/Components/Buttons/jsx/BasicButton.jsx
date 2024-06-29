import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ Contained, onclick, href}) {
  return (
    <Stack spacing={2} direction="row" className='fixed-top p-4'>
      <Button className='col-1' variant="contained" onClick={onclick} href={href}>{Contained}</Button>
    </Stack>
  );
}