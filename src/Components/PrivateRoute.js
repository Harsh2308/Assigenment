import React from 'react';
import { Navigate} from 'react-router-dom';
import Home from './Home';

const PrivateRoute = ({auth,setAuth,email,data1}) => {
    
    return auth ? <Home setAuth={setAuth} email={email} data1={data1} /> : <Navigate to="/login" />;
}

export default PrivateRoute