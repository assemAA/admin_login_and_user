


const tokenReducer = (state = {adminToken : localStorage.getItem('token') , adminEmail : localStorage.getItem('adminEmail') } , action) => {

    if (action.type === 'refresh'){

        state = {adminToken : localStorage.getItem('token') , adminEmail : localStorage.getItem('adminEmail')} ;
        return state ;
    }
    

    return state ;
}


export default tokenReducer ;