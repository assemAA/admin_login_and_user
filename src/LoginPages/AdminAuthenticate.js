import React from 'react';
import AdminHome from '../HomePages/AdminHomePage' ;
import LoginForm from './login'
import { BrowserRouter , Route , Redirect} from 'react-router-dom';
import AuthenticateContext from '../dataStore/AuthContext' ;

class AuthenticateLoginAdmin extends React.Component {


    render() { 
        return <div>
            {this.props.token ?
            <AuthenticateContext.Provider value={{
                'token' : this.props.token ,
                'email' : this.props.email ,
            }}> 
            <BrowserRouter>
            <Route  path='/home' exact component={AdminHome} />
            </BrowserRouter>
            </AuthenticateContext.Provider>
            : <BrowserRouter>
             <Redirect from="/home" to="/" />
            <LoginForm />
            </BrowserRouter>
             }
            </div>
    }
}
 



  
export default AuthenticateLoginAdmin ;