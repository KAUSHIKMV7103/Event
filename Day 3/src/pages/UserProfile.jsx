import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import p1 from '../assets/Images/profilebg.gif'

function UserProfile()
{
    const [value, onChange] = useState(new Date());
    return(
        // <div>
            
        //     <Calendar onChange={onChange} value={value} />

        // </div>
        <div>
            <div style={{width:'50%'}}>
                <img src={p1}></img>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default UserProfile;