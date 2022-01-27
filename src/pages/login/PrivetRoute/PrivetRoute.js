import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const {user, isLoading} = useAuth();
  if(isLoading){return <CircularProgress />}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;