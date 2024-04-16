import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
        <h1> Get in touch</h1>
        <img src={theme_pattern} 
        alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, culpa.</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src="" alt={mail_icon} /><p>omkarpomendkar100@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+91 72086 36561</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Mumbai ,India</p>
                </div>
            </div>
    
            </div>
            
            <form action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter your Name' />

                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder='Enter your Email' />

                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" placeholder='Enter your message' rows="8"></textarea>

                <button  type= 'submit 'className='contact-submit'>Submit Now</button>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
