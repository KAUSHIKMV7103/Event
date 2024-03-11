
import '../assets/CSS/login.css';
import p5 from '../assets/Images/loginimg.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/Api';
import { useState } from 'react';
const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username=="admin"&&password=="12345"){
      nav('/adminhome');
    }
    else{

      console.log('Username:', username);
      console.log('Password:', password);
      const token=(await login(username,password)).data;
    if(token!=null)
    {
      localStorage.setItem("JWTtoken",token);
      console.log('s');
      nav('/home');
    }
  }
  };
  return (
    <div className="login-container">
      <div className="image-half">
        <img src={p5} alt="Login" style={{height:'90%'}}/>
      </div>
      <div className="form-half" onSubmit={handleSubmit}>
        <Card className='Card'>
        <h2 style={{color:'black'}}> Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e) => setUserName(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Login</button>
          <h4>Create New Account</h4>
          <Link to='/register'>Register</Link> 
        </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;