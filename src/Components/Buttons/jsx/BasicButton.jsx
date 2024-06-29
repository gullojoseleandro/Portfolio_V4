import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ Contained, onclick, href, buttonclass }) {
  return (
    <Stack spacing={2} direction="row" className={buttonclass}>
      <Button variant="contained" onClick={onclick} href={href}>{Contained}</Button>
    </Stack>
  );
}