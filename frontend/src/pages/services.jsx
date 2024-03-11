import s1 from '../assets/Images/service1.jpg';
import s2 from '../assets/Images/service2.jpg';
import s3 from '../assets/Images/service3.jpg';
import s4 from '../assets/Images/service4.jpg';
import s5 from '../assets/Images/service5.jpg';
import s6 from '../assets/Images/service6.jpg';
import Navbar from '../pages/navbar';
import Footer from './footer';
function Service(){
    return(
        <div>
            <Navbar/>
        <div style={{backgroundColor:' rgb(41, 41, 89)',height:'70vh',marginTop:'-2%'}}>
            <h1 style={{color:"white",paddingLeft:'5%',paddingTop:'5%'}}>CORPORATE EVENT MANAGEMENT SERVICES</h1>
            </div>
            <div style={{backgroundColor:'black',height:'70vh',width:'70%',marginLeft:'15%',marginTop:'-25%'}}>
               <h1 style={{color:'white',fontWeight:'100',paddingTop:'10%',fontFamily:'Copperplate Gothic Light',marginLeft:'20%'}}>ACE D Event Management Company</h1>
               <br/><br/>
               <h2 style={{color:'white',fontFamily:'Aptos Display'}}>Organising and managing all the requirements for Corporate Events consisting of Meetings, Incentive Programs and Conferences including Exhibitions and Expo’s. Right from understanding the objective of the corporate event to finding the ideal venue, finest event tech support and supervising all the other event related things, ACE D Events will cater and handle your Corporate Events & MICE with flawless perfection.
                <br/><br/><br/><br/>
Events are a critical part of every corporate marketing and branding plans. While your team may come up with the brilliant ideas for luxurious product launches or remarkable MICE events, the corporate event management services offered by ACE D Events in India and UAE can make sure that your ideas are brought to life in the event. Our team handles event execution in accordance with your budget and expectations, without any scope of error. View our portfolio of successful corporate events</h2>
              </div>
              <br/>
              <br/>
        <div style={{backgroundColor:"rgb(215, 208, 208)",display:"flex",flexDirection: "row",justifyContent:'space-between'}}>
        <div>
           <h1 style={{color:'black',marginLeft:'20%'}}>Product Launch, Conference And Seminars</h1>
           <h2 style={{color:'black',fontWeight:'lighter',fontFamily:'revert',marginLeft:'20%'}}>As a trusted corporate event management company, a ACE D event showcases credible experience in organising conference and seminars for top global companies. On the event day, ACE D Events team ensures that all the guests invited by the Corporate are engaged, and they enjoy the event planned out for them</h2>
           </div>
            <div>
           <h1 style={{color:'black',marginLeft:'20%'}}>Outdoor Events</h1>
           <h2 style={{color:'black',fontWeight:'lighter',fontFamily:'revert',marginLeft:'20%'}}>Corporate Off-Sites, Outdoor Corporate Events are handled with expert precision by our event management services team. From venue finding to executing all outdoor event requirements and keeping in mind all safety and security precautions, ACE D Events can take care of all the essential details for outdoor events.</h2>
        </div>
        </div>
        <br/>
        <br/>
        <h1 style={{color:'black',marginLeft:'37%',fontFamily:'Arial Black'}}>PHOTOS OF OUR EVENT</h1>
        <br/><br/>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <img style={{height:'50vh',width:'30%'}} src={s1}></img>
            <img style={{height:'50vh',width:'30%'}} src={s2}></img>
            <img style={{height:'50vh',width:'30%'}} src={s3}></img>
        </div>
        <br/><br/>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <img style={{height:'50vh',width:'30%'}} src={s4}></img>
            <img style={{height:'50vh',width:'30%'}} src={s5}></img>
            <img style={{height:'50vh',width:'30%'}} src={s6}></img>
        </div>
        <br/><br/><br/>
        <div style={{backgroundColor:'silver',height:'30vh'}}>
           <h1 style={{color:'black',marginLeft:'40%',paddingTop:'5%'}}>You Dream, We Theme.</h1>
           <h2 style={{color:'black'}}>Our creativity and expertise can help you plan and deliver exceptional events</h2>
           
        </div>
        <br/><br/>   
        <Footer/>
        </div>
        
    )
}
export default Service;