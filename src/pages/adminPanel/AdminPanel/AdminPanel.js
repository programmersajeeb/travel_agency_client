import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <Box>
            <Box>
                <Box>
                <Typography variant="h1" component="h2" sx={{textTransform:'uppercase', fontWeight:'700', letterSpacing:'2px', fontSize:'34px', textAlign:'center'}}> Control Your Account</Typography>
                </Box>
                <Box sx={{width:'690px', margin:'0 auto'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} lg={4}>
                            <Box>
                                <Link to="/">
                                    <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
                                        <Box sx={{fontSize:'20px', color:'#b63327', marginRight:'10px'}}>
                                        <i class="fas fa-home"></i>
                                        </Box>
                                    <Box>
                                    <Typography variant="h1" component="h2" sx={{textTransform:'uppercase', fontSize:'18px', padding:'0', fontWeight:'700'}}> Home </Typography> 
                                    </Box>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={8} lg={4}>
                            <Box>
                                <Link to="/">
                                    <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
                                        <Box sx={{fontSize:'20px', color:'#b63327', marginRight:'10px'}}>
                                        <i class="fas fa-plane"></i>
                                        </Box>
                                    <Box>
                                    <Typography variant="h1" component="h2" sx={{textTransform:'uppercase', fontSize:'18px', padding:'0', fontWeight:'700'}}> Add Service </Typography> 
                                    </Box>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={8} lg={4}>
                            <Box>
                                <Link to="/">
                                    <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
                                        <Box sx={{fontSize:'20px', color:'#b63327', marginRight:'10px'}}>
                                        <i class="fab fa-blogger-b"></i>
                                        </Box>
                                    <Box>
                                    <Typography variant="h1" component="h2" sx={{textTransform:'uppercase', fontSize:'18px', padding:'0', fontWeight:'700'}}> Add Blog </Typography> 
                                    </Box>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={8} lg={4}>
                            <Box>
                                <Link to="/">
                                    <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
                                        <Box sx={{fontSize:'20px', color:'#b63327', marginRight:'10px'}}>
                                        <i class="fas fa-home"></i>
                                        </Box>
                                    <Box>
                                    <Typography variant="h1" component="h2" sx={{textTransform:'uppercase', fontSize:'18px', padding:'0', fontWeight:'700'}}> Home </Typography> 
                                    </Box>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminPanel;