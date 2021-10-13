import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter , Link, Redirect} from 'react-router-dom' ;
import AuthenticateLoginAdmin from './AdminAuthenticate'
import SignUp  from '../SingUpPage/SingUp' ;
import axios from 'axios';
import UserAuthenticate from './UserAuthenticate';

class loginForm extends Component {

    state = {
        email  : '' ,
        password : '' ,
        clickLogin : 0 ,
        usersData : this.props.users , 
        ClickSingnUp : 0 ,
        showComponent : '',
    }


    ClickSingnUpFun = () => {
        this.setState({ClickSingnUp : 1}) ;
    }


     checkLogin = async () => {

     
        this.setState({clickLogin : 1}) ;
        const options = {
            headers: {'Accept': 'application/json', 
            'Content-Type': 'application/json', }
          };
        await axios.post('https://medtroops-backend.appssquare.com/api/admin/login', {
            email: this.state.email,
            password: this.state.password,
          } , options)
          .then(res => {
                        this.setState({token : res.data.token}) 
                        this.setState({email : this.state.email})
                        localStorage.setItem('token' , this.state.token) 
                        localStorage.setItem('adminEmail' , this.state.email)
                        this.setState({showComponent : <AuthenticateLoginAdmin token = {this.state.token} email = {this.state.email} /> })                                       
                    })
          .catch(err => {
                       this.checkAsUser(err)
            }) ;     
         
    }

   checkAsUser = (err) => {

    localStorage.removeItem('userName') ;
    

    var found = false ;
          this.state.usersData.forEach(element => {
              if (element.userName == this.state.email && element.password == this.state.password ){
                  localStorage.setItem('userName', this.state.email);
                  this.setState({showComponent : <UserAuthenticate />})
                  found = true ; 
              }
          });
          if (!found){
            alert("wrong email or password " + err ) ;
          }
   }



    render() { if (this.state.clickLogin && this.state.token && this.state.email) {
        return <>
         {this.state.showComponent}
        </>
    }
    if (localStorage.getItem('userName')  && this.state.clickLogin){
      return <>
      {this.state.showComponent}
      </>
    }
    if (this.state.ClickSingnUp)
    return <>
       <SignUp />
    </>
       else {
        return (
        <div >
            <BrowserRouter>
            <Redirect from = "/home" to = "/" />
            <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">Login </a>
                 <li>
                   <Link to="/signUp" onClick={this.ClickSingnUpFun}>signUp</Link>
                </li>
                </div>
                
            </nav>

            
            <br />
            <form>
                
                <input className="form-control" type="text" id ="email" name ="email" placeholder = 'email or user name'   onChange ={e => this.setState({email : e.target.value})}/>
                <br />
                <input className="form-control" type = "password" id ="password" name = "password" placeholder = "Password"  onChange = {e => this.setState({password : e.target.value})}/>
                <br />
                
                <BrowserRouter>
                <Link to = "/home">
                <button  className = "btn btn-primary" onClick= {this.checkLogin}> submit </button>
                </Link>
                </BrowserRouter>
                </form>
                </BrowserRouter>
        </div> 
        );
       }
    }
}


function mapStateToProps (state) {
   return {
       users : state.dataUsersReducer ,
   } ;
}








 
export default connect (mapStateToProps) (loginForm);