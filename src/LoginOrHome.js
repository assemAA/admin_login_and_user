import React  from 'react';
import LoginForm from './LoginPages/login.js'
import { BrowserRouter ,Route, Redirect, Switch } from 'react-router-dom';
import SignUp from './SingUpPage/SingUp'
import AdminHome from './HomePages/AdminHomePage'
import { connect } from 'react-redux';



class LoginORHome extends React.Component {
    
    render() { 
        return <div>
            {this.props.adminToken && this.props.adminEmail ?
            <BrowserRouter>
            <Redirect from = "/" to = "/home" />
            <Route path="/home" component = {AdminHome} />
            </BrowserRouter>
            :
            <BrowserRouter>
            <Redirect from ="/home" to = "/" />
            <Switch>
            <Route path="/"  component = {LoginForm}/>
            <Route path="/signUp"  component = {SignUp} />
            </Switch>
            </BrowserRouter>
    }
        </div>;
    }
}
 
function mapStateToProps (state){
    return {
        adminToken : state.tokenAndEmailReducer.adminToken ,
        adminEmail : state.tokenAndEmailReducer.adminEmail ,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        refresh : () => dispatch({type : 'refresh'}) ,
    }
}
export default connect (mapStateToProps , mapDispatchToProps) (LoginORHome);