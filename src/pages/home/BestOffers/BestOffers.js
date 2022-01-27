import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BestOffer from '../BestOffer/BestOffer';

const BestOffers = () => {
  const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://shielded-hollows-68484.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
  return (
    <Box sx={{padding:'50px 0'}}>
      <Box>
      <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> BEST OFFERS </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> CHECK OUT OUR BEST PROMOTION TOURS </Typography>
      <Box >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              
                {
                  blogs.slice(0, 8).map(blog=><BestOffer
                  key={blog._id}
                  blog={blog}
                  ></BestOffer>)
                }
              </Grid>
       </Box>
      </Box>
      </Box>
      <Box sx={{textAlign:'center', marginTop:'50px'}}> <Link to="/availableServices" sx={{color:'#FFF'}}>
      <Button sx={{color:'#000', fontSize:'14px', padding:'6px 12px', backgroundColor:'#b63327' }} size="large" variant="text">EXPLORE</Button>
      </Link>
      </Box>
    </Box>
  );
};

export default BestOffers;