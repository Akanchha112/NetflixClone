import React from "react";
import "./accordion.css";
import data from "../fixtures/faqs.json";
import Accord from "./Accord";
import OptForm from "../optForm/optForm.jsx";

const Accordion = () => {
    return <>
        <div className="accord-container">
            <div className="heading"> <h1>Frequently Asked Questions</h1></div>
            
                {data.map((val) => {
                    return <Accord
                        id={val.id}
                        question={val.header}
                        answer={val.body}
                    />
                })}
            
            <OptForm/>
        </div>
    </>
}

export default Accordion;