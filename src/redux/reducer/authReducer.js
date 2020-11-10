const initialState = {

}

const authReducer = (state=initialState, action) =>{
    if(action.type === 'LOGIN_SUCCESS'){
        console.log('login success');
        return state;
    }

    if(action.type === 'LOGIN_ERROR'){
        console.log('login err', action.err.message);
        return state;
    }
    if(action.type === 'SIGNOUT_SUCCESS'){
        console.log('SIGNOUT success');
        return state;
    }

    if(action.type === 'SIGNOUT_ERROR'){
        console.log('SIGNOUT err', action.err.message);
        return state;
    }

    if(action.type === 'SIGNUP_SUCCESS'){
        console.log('signup success');
        return state;
    }

    if(action.type === 'SIGNUP_ERROR'){
        console.log('signup err', action.err.message);
        return state;
    }


    return state;
}

export default authReducer;