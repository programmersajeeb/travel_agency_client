import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BestOffer from '../BestOffer/BestOffer';

const BestOffers = () => {
  const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
  return (
    <Box>
      <Box>
      <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> BEST OFFERS </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> CHECK OUT OUR BEST PROMOTION TOURS </Typography>
      <Box >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              
                {
                  blogs.slice(0, 6).map(blog=><BestOffer
                  key={blog._id}
                  blog={blog}
                  ></BestOffer>)
                }
              </Grid>
       </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default BestOffers;