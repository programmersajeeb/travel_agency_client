import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import './AddReview.css'
import ClientReview from '../../ClientReview/ClientReview';

const AddReview = () => {
    const {register, handleSubmit, reset} = useForm();
    const [clientReviews, setClientReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-hollows-68484.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setClientReviews(data))
    }, []);
    const onSubmit = data => {
        console.log(data);
        axios
            .post('https://shielded-hollows-68484.herokuapp.com/rating', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Rating successfully');
                    reset();
                }
            })
    }
    return (
        <Box marginBottom="30px">
            <Container>
            <div>
            <div>
                <h2 style={{fontSize:"35px"}}>Reviews as Client</h2>
                {/* <iframe width="100%" height="300px"
                    src="https://clever-babbage-676a41.netlify.app/clientReview"
                    title="Our Client Review"></iframe> */}
                    <Box sx={{width:'100%', height:'300px', overflow:'scroll'}}>
                    <Box sx={{ flexGrow: 1  }}>
            <Container>
                <Grid container="container">
                    {
                        clientReviews.map(
                          clientReview => <ClientReview key={clientReview._id} clientReview={clientReview}></ClientReview>
                        )
                    }
                </Grid>
            </Container>
        </Box>
                    </Box>
            </div>
            <div className="reviewForm" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2>Review Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="number"
                        {...register("rate", { required: true, maxLength: 1 })}
                        placeholder="Rating(1-5)"/>
                    <textarea {...register("discription")} placeholder="Write Reviews (Click submite and reload web)"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
        </Container>
        </Box>
    );
};

export default AddReview;
