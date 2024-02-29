
import { Link } from 'react-router-dom';
import l1 from '../assets/Images/landing.gif'

function Landing()
{
   
    return(
       
        <div>
            
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{}}>
                <img style={{width:'100%',height:'100vh'}}src={l1}></img>
            </div>
            <div style={{width:'50%',marginLeft:'15%',marginTop:'30%'}}>
           <Link to='/login'>  <button style={{backgroundColor:'black',color:'white',padding:'30px'}} type='submit'> User Login</button> </Link>
             <Link to='/alogin'> <button style={{backgroundColor:'black',color:'white',padding:'30px',marginLeft:'10%'}}  type='submit'>Admin Login</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Landing;