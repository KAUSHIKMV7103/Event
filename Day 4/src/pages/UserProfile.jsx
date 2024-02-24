import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import p1 from '../assets/Images/profilebg.gif'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from './navbar';
function UserProfile()
{
    const [value, onChange] = useState(new Date());
    return(
        // <div>
            
        //     <Calendar onChange={onChange} value={value} />

        // </div>
        <div>
            <Navbar/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{}}>
                <img style={{width:'100%',height:'100vh'}}src={p1}></img>
            </div>
            <div style={{width:'50%',marginTop:'-10%'}}>
                <AccountCircleIcon style={{marginTop:'50%',marginLeft:'30%',fontSize:"100px"}}/>
                <br/><br/>
                <h2 style={{color:'black',marginLeft:'-20%'}}>Albert</h2>
                <h2 style={{color:'black',marginLeft:'-20%'}}>Albert@gmail.com</h2>
                <h2 style={{color:'black',marginLeft:'-20%'}}>Accenture Organizations</h2>
                <br/><br/>
               <div style={{ width: "400px", border: "1px solid black"}}></div>
               <br/><br/>
               <h1 style={{color:'black',marginLeft:'18%'}}>Previous Orders</h1>
               <h2 style={{color:'black',marginRight:'18%'}}>Order Id:64848</h2>
               <h2 style={{color:'black',marginRight:'18%'}}>Event:Annual Invester Meeting</h2>
               <h2 style={{color:'black',marginRight:'18%'}}>Venue:CJ PALAZZIO</h2>
               <h2 style={{color:'black',marginRight:'18%'}}>Date:20/12/2023</h2>
               <h2 style={{color:'black',marginRight:'18%'}}>Total Cost:1,80,000Rs</h2>

            </div>
        </div>
        </div>
    )
}

export default UserProfile;