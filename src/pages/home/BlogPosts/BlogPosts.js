import { Grid,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';
import './BlogPosts.css'

const BlogPosts = () => {
  
  const [page, setPage]= useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [newBlogs, setNewBlogs] = useState([]);
  const size = 12;
  useEffect(() => {
      fetch(`http://localhost:5000/newBlogs?page=${page}&&size=${size}`)
          .then(res => res.json())
          .then(data => {
            setNewBlogs(data.newBlogs);
              const count = data.count;
              const pageNumber = Math.ceil(count/size);
              setPageCount(pageNumber);
          });
  }, [page]);
  return (
    <Box>
      <Box>
      <Typography variant="h1" component="h2" sx={{fontWeight:'700', fontSize:'30px', lineHeight:'30px', textTransform:'uppercase', textAlign:'center' }}> BEST BLOG </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{fontWeight:'700', letterSpacing:'2px', fontFamily:'12px', marginBottom:'40px', textTransform:'uppercase', fontStyle:'italic', color:'#b63327', textAlign:'center'}}> CHECK OUT OUR BEST PROMOTION TOURS </Typography>
      <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
      {
                    newBlogs.map(
                      newBlog => <BlogPost key={newBlog._id} newBlog={newBlog}></BlogPost>
                    )
                }
      </Box>
      <div style={{width:'100%', textAlign:'center', marginBottom:'22px'}} className="pagination">
                    {
                        [...Array(pageCount).keys()]
                        .map(number=><button style={{padding:'5px 16px', border:'1px solid black', margin:'0 10px'}} className={number === page ? 'selected':''} key={number} onClick={()=> setPage(number)}>{number + 1}</button>)
                    }
                </div>
      </Box>
    </Box>
  );
};

export default BlogPosts;