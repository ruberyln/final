import * as React from 'react';
import { useEffect, useState } from 'react';
import { rest } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { pink } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

import OnlyDrawer from './onlydrawer';
import { Container } from '@mui/system';


const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));


const label = { inputProps: { 'aria-label': 'Color switch demo' } };


export default function Profile() {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userId = localStorage.getItem('userId');
  //     if (!userId) {
  //       console.log('No user ID found');
  //       return;
  //     }
  //     const response = await fetch(`http://localhost:5005/users/${userId}`);
  //     const userData = await response.json();
  //     setUser(userData);
  //   };
  //   fetchData();
  // }, []);

  // const handleSave = async () => {
  //   const userId = localStorage.getItem('userId');
  //   if (!userId) {
  //     console.log('No user ID found');
  //     return;
  //   }
  //   const response = await fetch(`http://localhost:5005/users/${userId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   const result = await response.json();
  //   console.log(result); // 'User updated!' if the request was successful
  // };

  // if (!user) {
  //   return <div>Loading...</div>; // or your loading screen
  // }

  return (

    <>
 
<Container >

<OnlyDrawer /> 
<Box sx={{ mx: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
    sx= {{ width: 56, height: 56 }}/>

     
   
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name"
          variant="outlined"
          value={user?.firstName}
          onChange={e => setUser({...user, firstName: e.target.value})}
        />
        <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          variant="outlined"
          value={user?.lastName}
          onChange={e => setUser({...user, lastName: e.target.value})}
        />

      <TextField   
      fullWidth sx={{ fontFamily: "'EB Garamond', serif" }}
      id="phoneNumber" 
      label="+23467892302" 
      variant="outlined" />
     
      <Box >

      <Typography sx={{ fontFamily: "'EB Garamond', serif" }}>Notification Settings</Typography>

    <Stack direction="row" spacing={5}> 
    <Typography sx={{ fontFamily: "'EB Garamond', serif" }}>Client birthday</Typography>  <PinkSwitch {...label} defaultChecked /> 
    <Typography sx={{ fontFamily: "'EB Garamond', serif" }}> Due Delivery </Typography>  <PinkSwitch {...label} defaultChecked />
    
     </Stack>
     </Box>
     {/* <Button onClick={handleSave}>Save</Button> */}
    </Box>
   

     </Box>

   
   
     </Container>
    </>
  
  );
}