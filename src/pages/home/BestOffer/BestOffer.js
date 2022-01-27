import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './BestOffer.css';

const BestOffer = (props) => {
  const { _id, country, price, img, trip_area, days} = props.blog;
  return (
       <Grid item xs={12} md={3} xl={3}>
          <Link to={`/serviceDetails/${_id}`}>
            <Box className='singelBlog' sx={{backgroundImage: `url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center', width:'100%', height:'300px', position:'relative',}}>
            <Box className='bottomArea' sx={{position:'absolute', bottom:'0', left:'0', right:'0', backgroundColor:'rgba(0, 0, 0, 0.5)', lineHeight:'1.8', padding:'20px 15px 15px 15px'}}>
              <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                <Typography variant="h1" component="h2" sx={{color:'#FFF', fontStyle:'italic', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1px', fontSize:'12px'}}> {country} </Typography>
                <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1px', fontSize:'12px'}}> {days} days </Typography>
                  </Box>
                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                    <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0', fontSize:'20px', lineHeight:'32px'}}> {trip_area} </Typography>
                    <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0', fontSize:'20px', lineHeight:'32px'}}> ${price} </Typography>
                    </Box>
                  </Box>
                  </Box>
          </Link>
          </Grid>
  );
};

export default BestOffer;

