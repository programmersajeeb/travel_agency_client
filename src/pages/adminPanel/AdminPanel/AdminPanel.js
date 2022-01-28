
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import '../../../dashBoard/MenuBar/ManuBar.css';
import { AdminSlider } from './AdminSlider';
import { Box, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const AdminPanel = () => {

    const {user} = useAuth();
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        const url = `https://shielded-hollows-68484.herokuapp.com/orderProducts?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `https://shielded-hollows-68484.herokuapp.com/orderProducts/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orderProducts.filter(orderProduct => orderProduct._id !== id);
                    setOrderProducts(remaining);
                };

            });
    };
  const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
  return (
    <>
             <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={showSidebar} />  
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul onClick={showSidebar} className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                   <AiOutlineClose />
                        </Link>
                     </li>
                     {
                         AdminSlider.map((item, index) => {
                             return (
                                 <li key={index} className={item.cName}>
                                     <Link to={item.path} >
                                         {item.icon} 
                                         <span>
                                             {item.title}
                                         </span>
                                   </Link>  
                                </li>
                            ) 
                         })
                     }
                </ul>
                 </nav>
            </IconContext.Provider> 




            <Box>
            <Container>
                <Box
                    margin="0 auto"
                    sx={{
                        width: 4/ 4,
                        mt: 8
                    }}>
                    <Grid container="container" spacing={0}>
                        <Grid item="item" xs={12} md={12} xl={12} backgroundColor="rgba(193,164,130,.3)">
                            <h2>Total Order: {orderProducts.length}</h2>
                            <TableContainer component={Paper}>
                                <Table
                                    // sx={{
                                    //     minWidth: 650
                                    // }}
                                    aria-label="Order Table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="left">Product Name</TableCell>
                                            <TableCell align="left">Price</TableCell>
                                            <TableCell align="right">Cancel</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            orderProducts.map((row) => (
                                                <TableRow
                                                    key={row._id}
                                                    sx={{
                                                        '&:last-child td, &:last-child th' : {
                                                            border: 0
                                                        }
                                                    }}>
                                                    <TableCell component="th" scope="row">
                                                        {row.buyerName}
                                                    </TableCell>
                                                    <TableCell align="left">{row.productName}</TableCell>
                                                    <TableCell align="left">${row.price}</TableCell>
                                                    <TableCell align="right"><Button onClick={() => handleDelete(orderProducts._id)} size="small">Cancel</Button></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

            
        </>
  );
};

export default AdminPanel;