import React  from 'react';
import { connect } from 'react-redux';

class UserHomePage extends React.Component {


    state = {
        EmployeesforUsers : this.props.Employees ,
    }
    render() { 
        return <div>
            <>
            
         <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">Home Page </a>
                 <a className = "navbar-brand"> welcome {localStorage.getItem("userName")}</a>
                 </div>
                 </nav>
           
           <br />

           
           <table className = "table table-sm">
           
           <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salry</th>
              <th scope="col">department</th>
              </tr>
            </thead>
                {this.state.EmployeesforUsers.map(e => 
                ( 
                  <tbody key = {e.id}>
                  <tr >
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.salary}</td>
                  <td>{e.department}</td>
                  </tr>
                 </tbody>
                ))}  
           
           </table>
           </>
           
        </div>;
    }
}

function mapStateToProps (state) {
  return {
    Employees : state.employeesReducerData ,
  }
}
 
export default connect (mapStateToProps) (UserHomePage);