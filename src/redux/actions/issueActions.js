export const open = (id) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const openedId = getState().firebase.auth.uid;
        const issues = getState().firestore.data.issues;
        const issueObj = issues && issues[id];    
        const name = getState().firebase.profile.firstName  + getState().firebase.profile.lastName 

        firestore.collection('issues').doc(id).set({
            ...issueObj,
            status : 'Opened',
            openedBy : name,
            openedId : openedId,
            openedDate : new Date()
        }).then(() => {
            dispatch({type : 'ISSUES_UPDATE_SUCCESS'})
        }).catch(err => {
            dispatch({type : 'ISSUES_UPDATE_ERROR', err})
        })
    }
} 

export const closed = (id) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const issues = getState().firestore.data.issues;
        const issueObj = issues && issues[id];
        

        firestore.collection('issues').doc(id).set({
            ...issueObj,
            status : 'Closed',
            closedDate : new Date()
        }).then(() => {
            dispatch({type : 'ISSUES_UPDATE_SUCCESS'})
        }).catch(err => {
            dispatch({type : 'ISSUES_UPDATE_ERROR', err})
        })
    }
}

export const reOpen = (id) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const issues = getState().firestore.data.issues;
        const issueObj = issues && issues[id];
        

        firestore.collection('issues').doc(id).set({
            ...issueObj,
            status : 'Re-Opened',
            openedDate : new Date()
        }).then(() => {
            dispatch({type : 'ISSUES_UPDATE_SUCCESS'})
        }).catch(err => {
            dispatch({type : 'ISSUES_UPDATE_ERROR', err})
        })
    }
}

export const handleSelectChange = e =>{
    return {
        type : 'SELECT_CHANGE',
        payload : e.target.value
    }
}






        
