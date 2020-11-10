export const login = cred =>{
    return (dispatch, getstate, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(()=> {
            dispatch({type : "LOGIN_SuCCESS"})
        })
        .catch(err => {
            dispatch({type : "LOGIN_ERROR", err})
        })
    }
}

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() => {
            dispatch({type : 'SIGNOUT_SUCCESS'})
        })
        .catch(err => {
            dispatch({type : 'SIGNOUT_ERROR', err})
        })
    }
}

export const signUp =(cred) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase.auth().createUserWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(res => {
            console.log(res)
            return firestore.collection('users').doc(res.user.uid).set({
                firstName : cred.firstName,
                lastName : cred.lastName,
            })
        }).then(() => {
            dispatch({type : 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type : 'SIGNUP_ERROR', err})
        })
    }
}