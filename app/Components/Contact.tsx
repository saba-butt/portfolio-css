import React from "react"
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "../styles/contact.css";




const Contact = () => {
  return (
    <div id="contact" className="contact-container ">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">
                    Get in touch
                </h2>
<p className="contact-text" data-aos="zoom-in-up">
    We had love to hear from you. Whether you have a question, a suggestion, or just

</p>
<div className="contact-flex" data-aos="zoom-in-up">
<AiOutlineMail size={30}/> buttsaba23@yahoo.com
</div>
<div className="contact-flex" data-aos="zoom-in-up">
<BsTelephone  size={30}/> +92333-0246583
</div>
            </div>
            <div className="contact-space">
                <div className="form" data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="input-field"
                    id="name" />
                </div>
                <div className="form" data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className="input-field"
                    id="email" />
                </div>
                <div className="form" data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className=" input-field"
                    id="message" rows={8}>
</textarea>
                </div>
                <button className="button"data-aos="zoom-in-up">Send</button>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
