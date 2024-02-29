import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';

import LoginPage from './pages/login';
import Registration from './pages/registration';

import Home from './pages/home';
import UserProfile from './pages/UserProfile';
import Service from './pages/services';
import Contact from './pages/contactus';
import Venue from './pages/venue';
import Landing from './pages/landing';
import Alogin from './pages/adminLogin';



function App() {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/alogin' element={<Alogin/>}/>
  
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/venue' element={<Venue/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
