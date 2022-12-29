import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="filled-required"
          label="Name"
          defaultValue="Hello World"
          variant="filled"
        />
        </div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Country"
          defaultValue="India"
          variant="filled"
        />
        </div>
        
        <div>
        <TextField
          required
          id="filled-required"
          label="Linkidn URL"
          defaultValue="http//www.linkdin.com"
          variant="filled"
        />
        </div>

        <div>
        <TextField
          required
          id="filled-required"
          label="Mobile Number"
          defaultValue="999999"
          variant="filled"
        />
        </div>

        <div>
        <TextField
          required
          id="filled-required"
          label="Git"
          defaultValue="Git link"
          variant="filled"
        />
        </div>


    </Box>
  );
}