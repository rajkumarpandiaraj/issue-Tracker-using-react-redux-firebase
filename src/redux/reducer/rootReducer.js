import { combineReducers } from 'redux';
import allIssueReducer from './allIssueReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    allIssueReducer : allIssueReducer,
    authReducer : authReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer,
})

export default rootReducer