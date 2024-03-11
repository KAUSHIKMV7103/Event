import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';

import LoginPage from './pages/login';
import Registration from './pages/registration';

import Home from './pages/home';
import UserProfile from './pages/UserProfile';
import Service from './pages/services';
import Contact from './pages/contactus';
import Venue from './pages/venue';
import AdminHome from './pages/Adminhome';
import AdminVenue from './pages/AdminVenue';
import AdminService from './pages/AdminService';
import AdminProfile from './pages/AdminProfile';




function App() {
  return (
  
    <BrowserRouter>
    <Routes>
  
  
  
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/venue' element={<Venue/>}/>
      <Route path='/logout' element={<LoginPage/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/adminvenue' element={<AdminVenue/>}/>
      <Route path='/adminservice' element={<AdminService/>}/>
      <Route path='/adminprofile' element={<AdminProfile/>}/>




   

      
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
