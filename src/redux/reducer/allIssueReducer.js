const initialState = {
    formValue : 'All',
    where : ['status', 'in', ['Opened','Re-Opened', 'Closed', 'Not Opened']]

}

const allIssueReducer = (state = initialState, action) => {
    const { type, payload } = action;
    if(type === 'ISSUES_UPDATE_SUCCESS'){
        console.log('issues col updated success');
        return state;
    }

    if(type === 'ISSUES_UPDATE_ERROR'){
        console.log('issues col update err');
        return state;
    }

    if(type === "USER_ID_SUCCESS"){
        console.log('user id success');
        return state;
    }
    
    
    if(type === "USER_ID_ERROR"){
        console.log('user id error');
        return state;
    }

    if(type === 'SELECT_CHANGE'){
        if(payload === 'All'){
            return {...state, formValue : payload, where: ['status', 'in', ['Opened','Re-Opened', 'Closed', 'Not Opened']]}
        }

        if(payload === 'Not Opened'){
            return {...state, formValue : payload, where: ['status', '==', 'Not Opened']}
        }

        if(payload === 'Opened'){
            return {...state, formValue : payload, where: ['status', 'in', ['Opened','Re-Opened']]}
        }

        if(payload === 'Closed'){
            return {...state, formValue : payload, where: ['status', '==', 'Closed']}
        }
    }
    return state;
}
export default allIssueReducer