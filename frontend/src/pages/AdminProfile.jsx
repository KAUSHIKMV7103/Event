import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import p1 from '../assets/Images/profilebg.gif'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from './navbar';
import AdminNavbar from './adminNav';
function AdminProfile()
{
    const [value, onChange] = useState(new Date());
    return(
      
        <div>
            <AdminNavbar/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{}}>
                <img style={{width:'100%',height:'100vh'}}src={p1}></img>
            </div>
            <div style={{width:'50%',marginTop:'-10%'}}>
                <AccountCircleIcon style={{marginTop:'50%',marginLeft:'30%',fontSize:"100px"}}/>
                <br/><br/>
                <h2 style={{color:'black',marginLeft:'-20%'}}>admin</h2>
                <h2 style={{color:'black',marginLeft:'-20%'}}>admin@gmail.com</h2>
        
                <br/><br/>
               <div style={{ width: "400px", border: "1px solid black"}}></div>
            

            </div>
        </div>
        </div>
    )
}

export default AdminProfile;