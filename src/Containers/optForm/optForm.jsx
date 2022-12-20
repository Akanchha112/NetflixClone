import React from 'react';
import "./optForm.css";
const optForm = ()=>{
    return(
        <div className="faq-input">
                <div className="ready-to-watch">
                Ready to watch? Enter your email to create or restart your membership.
                </div>
                <div className="input">
                    <input  placeholder={"Email address"} className="email-in"/>
                    <button className="email-butt">Get started</button>
                </div>
        </div>
    )
}

export default optForm;