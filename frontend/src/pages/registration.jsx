
import { useState } from 'react';
import '../assets/CSS/login.css';
import p5 from '../assets/Images/loginimg.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [cname,setCname]=useState("");
  const [password,setPassword]=useState("");
  const [revenue,setRevenue]=useState("");
  
  const handleRegister=(e)=>{
    e.preventDefault()
    console.log(username,email,cname,revenue,password);
    axios.post("http://localhost:8080/auth/new",{
        "name": username,
        "email": email,
        "password": password,
        "roles": "user"
      
    })
  }
  return (
    <div className="login-container">
      <div className="image-half">
        <img src={p5} alt="Login" style={{height:'90%'}}/>
      </div>
      <div className="form-half">
        <Card className='Card'>
        <h2 style={{color:'black'}}>Registration</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          
          <label htmlFor="cname">Company Name:</label>
          <input type="text" id="cname" name="cname" value={cname} onChange={(e)=>setCname(e.target.value)}/>
          
          <label htmlFor="revenue">Revenue:</label>
          <input type="number" id="revenue" name="revenue" value={revenue} onChange={(e)=>setRevenue(e.target.value)}/>



          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button type="submit">Register</button>
          <h4 >Already have an account?</h4>
          <Link to='/login'>Login here</Link> 
        </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;