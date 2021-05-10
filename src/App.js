import React from 'react';
import logo from './290-coin-outline.svg';
import './App.css';

import { Button } from 'primereact/button';

import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { auth, provider } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from './features/userSlice';

function App() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = ()=> {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser({
        userName: result.user.displayName,
        userEmail: result.user.email
      }))
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState())
    }).catch((err) => alert(err.message ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          userName ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Button className="p-button-raised" label="Sign In with Google" onClick={handleSignIn}/>
            
          )
        }
      </header>
    </div>
  );
}

export default App;
