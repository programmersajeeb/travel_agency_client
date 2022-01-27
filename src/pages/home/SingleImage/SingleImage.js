import React from 'react';
import { Box } from '@mui/system';

const SingleImage = () => {
  return (
    <Box>
      <Box sx={{backgroundImage:'url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/altair/demo/wp-content/uploads/2014/10/1600x1200-13.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', height:'60vh', backgroundPosition:'center'}}></Box>
    </Box>
  );
};

export default SingleImage;