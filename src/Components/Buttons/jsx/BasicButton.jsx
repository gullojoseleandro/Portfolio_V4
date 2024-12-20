import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ content, onClick, href, buttonclass, buttonstyle }) {
  return (
    <Stack spacing={2} direction="row" className={buttonclass}>
      <Button style={buttonstyle} onClick={onClick} href={href}>{content}</Button>
    </Stack>
  );
}