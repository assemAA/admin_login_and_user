import React from 'react';
import LoginForm from '../LoginPages/login'
import { BrowserRouter, Redirect , Link} from 'react-router-dom';
import { connect } from 'react-redux';



class SignUp extends React.Component {

    state = {
        userName : '' ,
        password : '' ,
        repeatPassword : '',
        clickSingUp : 0 ,
    }


    SignUp = (e) => {
        e.preventDefault() ;
        if (this.state.userName !== '' && this.state.password !== '' && this.state.password === this.state.repeatPassword){
            this.setState({clickSingUp : 1}) ;
            localStorage.setItem('signUpUserName' , this.state.userName) ;
            localStorage.setItem('signUpPassword' , this.state.password) ;
            this.props.signUp();
        }

        else 
        alert("please sure that you entre the user name and password and the password equal repeated password") ;
        
        

    }   

    render() { 
        if (this.state.clickSingUp)
        return <>
        <BrowserRouter>
        <Redirect from = "/signUp" to ="/" />
        <LoginForm />
        </BrowserRouter>
        </>
        else 
        return <div>
            <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">SignUp </a>
                </div> 
            </nav>
            <br />
           <form>
                
                <input className="form-control" type="text" id ="userName" name ="userName" placeholder = 'user name'   onChange ={e => this.setState({userName : e.target.value})}/>
                <br />
                <input className="form-control" type = "password" id ="password" name = "password" placeholder = "Password"  onChange = {e => this.setState({password : e.target.value})}/>
                <br />

                <input className="form-control" type = "password" id ="repeat password" name = "repeat password" placeholder = "repeat Password"  onChange = {e => this.setState({repeatPassword : e.target.value})}/>
                <br />
                
                <BrowserRouter>
                <Link to = "/">
                <button  className = "btn btn-primary" onClick= {this.SignUp}> SignUp </button>
                </Link>
                </BrowserRouter>
                </form>
        </div>;
    }
}


function mapStateToProps (state) {
   return {
       users : state.dataUsersReducer ,
   } ;
}


function mapDispatchToProps (dispatch) {

    return {
        signUp : ()=> dispatch({type : 'signUp'}) ,
    }
}
 
export default connect (mapStateToProps , mapDispatchToProps) (SignUp);