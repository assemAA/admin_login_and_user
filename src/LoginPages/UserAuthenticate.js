import React from 'react';
import UserHomePage from '../HomePages/UserHomePage';
import LoginForm from './login'
import { BrowserRouter , Route , Redirect} from 'react-router-dom';
import AuthenticateContext from '../dataStore/AuthContext' ;

class UserAuthenticate extends React.Component {
    render() { 
        return <div>
            {localStorage.getItem('userName') ?
            <AuthenticateContext.Provider value={{
                'userName' : localStorage.getItem('userName') ,
            }}> 
            <BrowserRouter>
            <Route  path='/home' exact component={UserHomePage} />
            </BrowserRouter>
            </AuthenticateContext.Provider>
            : <BrowserRouter>
             <Redirect from="/home" to="/" />
            <LoginForm />
            </BrowserRouter>
            }
        </div>;
    }
}
 
export default UserAuthenticate;