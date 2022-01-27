import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = (props) => {
  const { _id, title, country, discription, date, img } = props.newBlog;
  return (
    <Link to={`/blogDetails/${_id}`}>
      <Box sx={{position:'relative', width:'350px', height:'500px', marginBottom:'22px'}}>
      <Box style={{backgroundImage: `url(${img})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} className="blog-card spring-fever">
        <div className="title-content">
          <h3>{country}</h3>
          <hr />
          <div className="intro">{title}</div>
        </div> 
        <div className="card-info"> {discription} </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li className="comments">12</li>
            <li className="date">{date}</li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </Box>
      </Box>
      </Link>
  );
};

export default BlogPost;