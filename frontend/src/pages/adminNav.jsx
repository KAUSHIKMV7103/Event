import React from 'react';
import '../assets/CSS/navbar.css'; 
import asce from "../assets/Images/asce.jpg"
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={asce} alt="Logo" className="navbar__logo" style={{height:"25px",width:"90px"}} />
      </div>
      <div className="navbar__center">
        <ul className="navbar__menu">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/adminvenue">Venues</Link></li>
          <li><Link to="/adminservice">Services</Link></li>     
        </ul>
      </div>
      <div className="navbar__right">
        <a style={{marginRight:'20%'}}href='/logout'>Logout</a>
        <a href="/adminprofile">Profile</a>
      </div>
    </nav>
  );
};

export default AdminNavbar;
