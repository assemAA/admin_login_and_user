import React from 'react';


const AuthenticateContext = React.createContext ({
    'email' : localStorage.getItem('adminEmail'),
    'token' : localStorage.getItem('token') ,
})

export default AuthenticateContext ;