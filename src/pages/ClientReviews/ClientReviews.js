import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material';
import ClientReview from '../ClientReview/ClientReview';

const ClientReviews = () => {
    const [clientReviews, setClientReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-hollows-68484.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setClientReviews(data))
    }, []);
    return (
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
    );
};

export default ClientReviews;