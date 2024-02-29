import Navbar from "./navbar";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import Footer from "./footer";
function Contact(){
    return(
        <div>
            <Navbar/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{backgroundColor:'silver',height:'100vh',width:'50%'}}>
                <h2 style={{color:'black',fontFamily:'Bahnschrift'}}>WE ARE READY AND CONNECTED</h2>
                <h1 style={{color:'black',fontFamily:'Arial Blac5k'}}>Let's Make An Event!</h1>
                <div style={{ width: "40px", border: "1px solid blue"}}></div>
                <br/>
                <h2 style={{color:'black',fontFamily:'Bahnschrift'}}>We are waiting for you in our office or in another way, you can contact us via the contact form below to discuss your project or idea.</h2>
                <br/><br/><br/><br/>
                <div style={{display:'flex'}}>
        <input type="text" id="username" name="username" placeholder="Your username" style={{height:'45px',width:'200px',marginLeft:'100px'}}/>
        <input type="number" id="number" name="Mobile no" placeholder="Your number" style={{height:'45px',width:'200px',marginLeft:'100px'}} />
        </div>
        <br/><br/>  
        <div style={{display:'flex'}}>
        <input type="email" id="email" name="email" placeholder="Your email" style={{height:'45px',width:'200px',marginLeft:'100px'}}/>
        </div>
        <br/><br/><br/>
        <div >
        <input type="textbox" id="textbox" name="textbox" placeholder="Your message" style={{height:'200px',width:'500px',marginLeft:'100px'}}/>
        </div>
        <br/><br/>
        <button style={{height:'50px',width:'500px',marginLeft:'100px',backgroundColor:'rgb(2, 2, 31)',color:'white'}} type="submit">Send a message</button>
            </div>
            <div style={{marginLeft:'5%',marginTop:'5%'}}>
               <h1 style={{color:'black'}}>REACH US!</h1>
               <div style={{ width: "300px", border: "1px solid black"}}></div>
               <div>
                <div style={{display:'flex',flexDirection:'row',width:'500px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                       <WhatsAppIcon style={{fontSize:"xx-large"}}/>
                    </div>
                    <div style={{marginLeft:'10%'}}>
                         <h1 >Our hot line phone number:
</h1>+91 9820054081
                    </div>
                        </div>
                    <div style={{display:'flex',flexDirection:'row',width:'500px'}}>
                        <div style={{marginTop:'5%'}}>
                            <BusinessIcon style={{fontSize:"xx-large"}}/>
                        </div>
                        <div style={{marginLeft:'10%'}}>
                            <h1>Our address:</h1>
5th Floor Sunteck Centre, Subhash Road, Vile Parle East, Mumbai – 400057
                        </div>
                    </div>
                        <div style={{display:'flex',flexDirection:'row',width:'500px'}}>
                            <div style={{marginTop:'5%'}}>
                                <EmailIcon  style={{fontSize:"xx-large"}}/>
                        </div>
                            
                            <div style={{marginLeft:'10%'}}>
                                <h1>Our mail:</h1>
                               info@acedevents.co.in
                            </div>
                </div>
               </div>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}
export default Contact;