import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TravelQuote = () => {
  return (
    <Box>
      <Box sx={{padding:'50px 0'}}>
      <Typography sx={{textTransform:'uppercase', fontWeight:'700', fontSize:'30px', lineHeight:'30px', marginBottom:'5px', color:'##000', textAlign:'center'}} variant="h1" component="h2"> LAKE GENEVA SWITZERLAND </Typography>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', margin:{lg:'50px auto 0 auto'}, width: {lg:'1200px'}, }} >
      <Typography variant="body1" gutterBottom sx={{fontSize:'13px', color:'#333333', width:'58%'}}>
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
      </Typography>
      <Typography variant="body1" gutterBottom sx={{fontSize:'18px', color:'#000', width:'38%'}}>
      <q>
      It was fantastic going on the sled to see the views on the mountains! And the action of it – I loved going fast!
      </q>
      </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default TravelQuote;