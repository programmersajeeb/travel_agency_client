import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../home/Navigation/Navigation';

const SingleService = () => {
  const {BlogId} = useParams();
    const [serviceDetails, setServiceDetails] = useState({});
    const {img, title, discription, country, date, days, price} = serviceDetails;
    useEffect(() => {
        fetch(`https://shielded-hollows-68484.herokuapp.com/blogs/${BlogId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, []);
  return (
    <Box>
      <Navigation />
      <Box>
      <Box sx={{width:'100%',marginTop:'64px', height:'60vh', backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box>
          <Typography variant="h1" component="h2" sx={{color:'#FFF', fontSize:'16px', letterSpacing:'2px', fontWeight:'700', lineHeight:'1.5', wordWrap:'break-word', textTransform:'uppercase', textAlign:'center', fontStyle:'italic'}}> {country} </Typography>
          <Typography variant="subtitle1" gutterBottom component="div" sx={{color:'#FFF', fontSize:'40px', letterSpacing:'2px', fontWeight:'700', lineHeight:'1.5', wordWrap:'break-word', textTransform:'uppercase', textAlign:'center'}}> {title} </Typography>
          </Box>
        </Box>
        <Box sx={{width:'1200px', margin:'0 auto', marginTop:'50px'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} lg={4}>
        <Typography variant="h1" component="h2" sx={{fontSize:'11px', fontStyle:'italic', fontWeight:'700', color:'#999', letterSpacing:'2px', textAlign:'center', textTransform:'uppercase'}}>
          Date
        </Typography>
        <Typography variant="h1" component="h2" sx={{fontSize:'20px', fontWeight:'700', color:'#000', textAlign:'center', textTransform:'uppercase'}}>
          {date}
        </Typography>
        </Grid>
        <Grid item xs={4} lg={4}>
        <Typography variant="h1" component="h2" sx={{fontSize:'11px', fontStyle:'italic', fontWeight:'700', color:'#999', letterSpacing:'2px', textAlign:'center', textTransform:'uppercase'}}>
        DURATION
        </Typography>
        <Typography variant="h1" component="h2" sx={{fontSize:'20px', fontWeight:'700', color:'#000', textAlign:'center', textTransform:'uppercase'}}>
          {days}
        </Typography>
        </Grid>
        <Grid item xs={4} lg={4}>
        <Typography variant="h1" component="h2" sx={{fontSize:'11px', fontStyle:'italic', fontWeight:'700', color:'#999', letterSpacing:'2px', textAlign:'center', textTransform:'uppercase'}}>
        PRICE
        </Typography>
        <Typography variant="h1" component="h2" sx={{fontSize:'20px', fontWeight:'700', color:'#000', textAlign:'center', textTransform:'uppercase'}}>
          {price}
        </Typography>
        </Grid>
        
      </Grid>
    </Box>
    <Box sx={{marginTop:'50px'}}>
    <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> {country} </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> {title} </Typography>
    </Box>
    <Box sx={{marginBottom:'50px'}}>
            <Typography variant="body1" gutterBottom sx={{color:'#333333', lineHeight:'1.8', wordBreak:'break-word', fontSize:'13px', fontWeight:'400'}}> {discription} </Typography>
            </Box>




        </Box>
      </Box>
    </Box>
  );
};

export default SingleService;