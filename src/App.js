import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.js';
import Header from './components/header/Header.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';
import Users from './components/users/Users';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className='main-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
