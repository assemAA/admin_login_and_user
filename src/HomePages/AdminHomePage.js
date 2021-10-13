import React from 'react';
import LoginForm from '../LoginPages/login'
import { BrowserRouter  , Redirect} from 'react-router-dom' ;
import AuthenticateContext from '../dataStore/AuthContext' ;
import "antd/dist/antd.css";
import Employee from './Employee'
import { connect } from 'react-redux';
import RefreshPage from '../LoginOrHome' ;




class AdminHome  extends React.Component {


    
    state = {
      employees : this.props.Employees,
      showComponent : '' ,

    }
  
    Logout = () => {
      localStorage.clear () ;
      this.setState({
        showComponent : <RefreshPage />
      })
    }
    
    render() {  
        
          
        return (  this.state.showComponent === '' ? 
        <div>
        <AuthenticateContext.Consumer>{ (e) =>  e.token && e.email ?
         <>

         <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">Home Page </a>
                 <a className = "navbar-brand"> welcome {e.email}</a>
                 <button className = "btn btn-outline-danger" onClick = {this.Logout}> log out </button>
                 </div>
                 </nav>
           <br />

           {e.token}

           <br />
           <br />
           
           <table className = "table table-sm">
           
           <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salry</th>
              <th scope="col">department</th>
              <th scope="col">Action</th>
              </tr>
            </thead>
                {this.state.employees.map(e => 
                ( 
                  <tbody key = {e.id}>
                  <tr >
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.salary}</td>
                  <td>{e.department}</td>
                  <Employee  name = {e.name} age = {e.age} salary = {e.salary} department = {e.department} />
                  </tr>
                 </tbody>
                ))}  
           
           </table>
           </> : <> <BrowserRouter>
             <Redirect from='/home/' to="/" />
             <LoginForm />
            </BrowserRouter>
            </>

        }
            </AuthenticateContext.Consumer>
            </div> :
            <BrowserRouter>
            <Redirect from = "/home" to = "/" />
            {this.state.showComponent} 
            </BrowserRouter>
        )
    }
}

function mapStateToProps (state) {
  return {
    Employees : state.employeesReducerData ,
  }
}



export default connect (mapStateToProps) (AdminHome) ;