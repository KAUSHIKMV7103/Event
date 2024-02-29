
import '../assets/CSS/login.css';
import p5 from '../assets/Images/loginimg.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Alogin = () => {
  return (
    <div className="login-container">
      <div className="image-half">
        <img src={p5} alt="Login" style={{height:'90%'}}/>
      </div>
      <div className="form-half">
        <Card className='Card'>
        <h2 style={{color:'black'}}>Admin Login</h2>
        <form>
          <label htmlFor="username">Admin name:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
          
        </form>
        </Card>
      </div>
    </div>
  );
};

export default Alogin;