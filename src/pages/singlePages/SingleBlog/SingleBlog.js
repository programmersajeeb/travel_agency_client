import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const {BlogId} = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    const {img, title, discription, country, date} = blogDetails;
    useEffect(() => {
        fetch(`http://localhost:5000/newBlogs/${BlogId}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data));
    }, []);
  return (
    <Box>
      <Box>
        <Box sx={{width:'100%', height:'60vh', backgroundImage:"url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/altair/demo/wp-content/uploads/2014/10/1600x1200-12.jpg)", backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box>
          <Typography variant="h1" component="h2" sx={{color:'#FFF', fontSize:'34px', letterSpacing:'2px', fontWeight:'700', lineHeight:'1.5', wordWrap:'break-word', textTransform:'uppercase', textAlign:'center'}}> {title} </Typography>
          <Typography variant="subtitle1" gutterBottom component="div" sx={{color:'#FFF', fontSize:'14px', letterSpacing:'2px', fontWeight:'700', lineHeight:'1.5', wordWrap:'break-word', textTransform:'uppercase', textAlign:'center', fontStyle:'italic'}}> {date}, {country} </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{width:'690px', margin:'0 auto'}}>
            <Box sx={{width:'100%', height:'460px', backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></Box>
            <Box>
            <Typography variant="body1" gutterBottom sx={{color:'#333333', lineHeight:'1.8', wordBreak:'break-word', fontSize:'13px', fontWeight:'400'}}> {discription} </Typography>
            </Box>
            <Box>
              {/* <Box>
                social area
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleBlog;