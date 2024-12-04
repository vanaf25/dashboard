import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconTrash, IconSend } from '@tabler/icons-react';

const TextIconButtons = () => (
  <Stack spacing={1} direction="row" justifyContent="center">
    <Button color="error" startIcon={<IconTrash width={18} />}>
      Left Icon
    </Button>
    <Button color="secondary" endIcon={<IconSend width={18} />}>
      Right Icon
    </Button>
  </Stack>
);

export default TextIconButtons;
