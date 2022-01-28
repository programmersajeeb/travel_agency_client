import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import ManuBar from '../MenuBar/ManuBar';

const MakeAdmin = () => {
  const [email, setEmail] =useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = e =>{
    setEmail(e.target.value);
  }
  const handelAdminSubmit = e =>{
  const user = {email};
    fetch('https://shielded-hollows-68484.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        console.log(data);
        setSuccess(true);
      }
    })

    e.preventDefault()
  }
  return (
    <Box>
      <ManuBar />
      <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handelAdminSubmit}>
      <TextField sx={{ width: '50%', m: 1 }} label="Email" placeholder="Enter email" type="email" onBlur={handleOnBlur} variant="standard"/>
      <Button type="submit" variant="contained">Make admin</Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </div>
    </Box>
  );
};

export default MakeAdmin;