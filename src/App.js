// App.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import AboutUs from "./Aboutus/aboutus";
import Contacts from "./Contacts/contacts";
import Sidenav from "./navigation/Sidenav";
import Profile from "./Profile/Profile";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <Router>
      <div className="app">
        <Sidenav />
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {user ? (
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile/:username" element={<Profile />} /> {}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            ) : (
              <Authenticate />
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

  

