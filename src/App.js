import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import Sidebar from './features/Sidebar';
import Chat from './features/Chat';
import {selectUser} from './features/userSlice'
import Login from './features/Login';
import { auth } from './features/firebase'
import {login, logout} from './features/userSlice'



function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    // console.log("user >>", user);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user logged in
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }))
            }
            else{
                // user logged out
                dispatch(logout());
            }
        })
        return () => {
            // cleanup
        }
    }, [dispatch])
  return (
      <div className="app">
          {user  ? (
          <>
          <Sidebar />
          <Chat />
          </>
          ) : (
          <Login />
          )}
          
    </div>
  );
}

export default App;
