import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/rootReducer';


import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import firebase from './config/fbConfig';
import {createFirestoreInstance} from 'redux-firestore';


import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase'

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))

const rrfProps = {
  firebase,
  config : {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch : store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)){
      return(
          <div className="loading">
              <p>Loading....</p>
          </div>
      )
  }
  return children;
}

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
