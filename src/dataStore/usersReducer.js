import Data from "./data.json" ;


var  Users = {
    usersAndPasswords: Data,
   
}


const usersReducer = (state = Users.usersAndPasswords , action) => {

    if (action.type === 'signUp'){
        state.push({userName : localStorage.getItem('signUpUserName') ,password : localStorage.getItem('signUpPassword') }) ;
    } 
    
    return state;
}


export default usersReducer ;