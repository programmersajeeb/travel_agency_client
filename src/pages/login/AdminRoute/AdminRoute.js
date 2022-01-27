import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const AdminRoute = ({ children, ...rest }) => {
  const {user, admin, isLoading} = useAuth();
  if(isLoading){return <CircularProgress />}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;