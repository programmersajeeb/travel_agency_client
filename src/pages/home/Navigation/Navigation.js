import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {
  const {admin} = useAuth();
  const {user, logout} = useAuth();
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem:{
      color:"#FFFFFF",
      textDecoration:"none",
    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important",
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:"none",
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign:"right",
      }
    },
    mobileNavItem:{
      textDecoration:"none",
      color:"#FFFFFF",

    }
  })
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle()

  const [state, setState] = React.useState(false);

  const list = (
    <Box
      role="presentation"
    >
      <List>
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/'>Home</Link> </ListItemText>
          </ListItem>
          <Divider />
          {
            user?.email ?
          <Box>
            <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/adminPanel'>Dashboard</Link> </ListItemText>
          </ListItem>
          <Divider />
          {
                admin &&
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/menuBar'>Control Panel</Link> </ListItemText>
          </ListItem>
}
          <Divider />

          <ListItem button>
            <ListItemText> <Button className={mobileNavItem} onClick={logout} color="inherit">Logout</Button> </ListItemText>
          </ListItem>
          <Divider />
          </Box>
          :
          
          <Box>
            <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/login'>Login</Link> </ListItemText>
          </ListItem>
          <Divider />
          </Box>
}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"rgba(16, 16, 16, 0.514)", boxShadow:"none"}} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Travel Agency
          </Typography>
          <Box className={navItemContainer}>
               <NavLink className={navItem} to="/"> <Button color="inherit">Home</Button> </NavLink>
               {
            user?.email ?
               
               <Box sx={{display:'inline-block'}}>
                 <NavLink className={navItem} to="/adminPanel"> <Button color="inherit">Dasboard</Button> </NavLink>
                 {
                admin &&
                 <NavLink className={navItem} to="/menuBar"> <Button color="inherit">Control Panel</Button> </NavLink>
}

               <Button onClick={logout} color="inherit">Logout</Button>
               </Box>
               :
               <Box sx={{display:'inline-block'}}>
                 <NavLink className={navItem} to="/login"> <Button color="inherit">Login</Button> </NavLink>
               </Box>
               }


             </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=> setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
  );
};

export default Navigation;