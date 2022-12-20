import React from "react";
import "./foot.css";
const footer= () => {
    return(
        <>
        <div className="footercontainer">
            <div className="sub-contain call">
                <div>Questions? Call <span>000-800-040-1843</span></div>
            </div>
            <div className="sub-contain links">
                <div className="indi-link">
                    <div>FAQ</div>
                    <div>Investor Relations</div>
                    <div>Privacy</div>
                    <div>Speed Test</div>
                </div>
                <div className="indi-link">
                    <div>Help Center</div>
                    <div>Jobs</div>
                    <div>Cookie Preferences</div>
                    <div>Legal Notices</div>
                </div>
                <div className="indi-link">
                    <div>Account</div>
                    <div>Ways to Watch</div>
                    <div>Corporate Information</div>
                    <div>Only on Netflix</div>
                </div>
                <div className="indi-link">
                    <div> <a href="#">Media Centre</a> </div>
                    <div> <a href="#">Terms of Use</a> </div>
                    <div> <a href="#">Contact Us</a> </div>
                </div>
            </div>
            <div className="sub-contain language">
                <div className="button">
                    English
                </div>
            </div>
            <div className="sub-contain NetInd">
                Netflix India
            </div>
        </div>

        </>
    )
}

export default footer;