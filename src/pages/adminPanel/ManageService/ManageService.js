import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManuBar from '../../../dashBoard/MenuBar/ManuBar';

const ManageService = () => {
  const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://shielded-hollows-68484.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setServices(data)) 
    }, []);

    const handleDelete = id => {
        const url = `https://shielded-hollows-68484.herokuapp.com/blogs/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                };

            });
    };
  return (
    <Box>
      <ManuBar />
      <Box>
      <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> BEST OFFERS </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> CHECK OUT OUR BEST PROMOTION TOURS </Typography>
      <Box >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            
              
                {
                  services.map(service=>
                    <Grid  key={service._id} item xs={12} md={3} xl={3}>
            <Box className='singelBlog' sx={{backgroundImage: `url(${service.img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center', width:'100%', height:'300px', position:'relative',}}>
            <Box className='bottomArea' sx={{position:'absolute', bottom:'0', left:'0', right:'0', backgroundColor:'rgba(0, 0, 0, 0.5)', lineHeight:'1.8', padding:'20px 15px 15px 15px'}}>
              <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                <Typography variant="h1" component="h2" sx={{color:'#FFF', fontStyle:'italic', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1px', fontSize:'12px'}}> {service.country} </Typography>
                <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1px', fontSize:'12px'}}> {service.days} days </Typography>
                  </Box>
                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                    <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0', fontSize:'20px', lineHeight:'32px'}}> {service.trip_area} </Typography>
                    <Typography variant="h1" component="h2" sx={{color:'#FFF', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0', fontSize:'20px', lineHeight:'32px'}}> ${service.price} </Typography>
                    </Box>

                    <Box sx={{textAlign:'center'}}>
                    <Button sx={{color:'#FFF', fontSize:'14px', padding:'6px 12px', backgroundColor:'#b63327' }} onClick={() => handleDelete(service._id)} size="large" variant="text">DELETE</Button>
                    </Box>
                  </Box>
                  </Box>
          </Grid>
                  
                    )
                }
              </Grid>
       </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default ManageService;