import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManuBar from '../../../dashBoard/MenuBar/ManuBar';
import '../../home/BlogPost/BlogPost.css';
import '../../home/BlogPosts/BlogPosts.css';

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    useEffect(() => {
        fetch('https://shielded-hollows-68484.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data)) 
    }, []);

    const handleDelete = id => {
        const url = `https://shielded-hollows-68484.herokuapp.com/blogs/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = blogs.filter(blog => blog._id !== id);
                    setBlogs(remaining);
                };

            });
    };
  return (
    <Box>
      <ManuBar />
      <Box>
      <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> BEST OFFERS </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> CHECK OUT OUR BEST PROMOTION TOURS </Typography>
      <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
      
      {
                    blogs.map(
                      blog => 
                      <Box key={blog._id} sx={{position:'relative', width:'350px', height:'500px', marginBottom:'22px'}}>
      <Box style={{backgroundImage: `url(${blog.img})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} className="blog-card spring-fever">
        <div className="title-content">
          <h3>{blog.country}</h3>
          <hr />
          <div className="intro">{blog.title}</div>
        </div> 
        <div className="card-info"> <Button sx={{color:'#FFF', fontSize:'14px', padding:'6px 12px', backgroundColor:'#b63327' }} onClick={() => handleDelete(blogs._id)} size="large" variant="text">DELETE</Button> </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li className="comments">12</li>
            <li className="date">{blog.date}</li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </Box>
      </Box>
                    )
                }
      </Box>
      </Box>
    </Box>
  );
};

export default ManageBlog;