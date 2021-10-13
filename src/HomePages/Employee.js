import React from 'react';


class Employee extends React.Component {
    render() { 
        return <td>
        
        <button className="btn btn-primary" >edit </button>
        <span> </span>
        <button className = "btn btn-danger"> delete </button>
        <span> </span>
        <button className="btn btn-info"> details </button>
        </td>;
    }
}
 
export default Employee ;