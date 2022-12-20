import React, { useState } from "react";
import "./accordion.css";

const Accord = (props) => {
    const plus= <div> <i class='icon-plus'></i></div> ;
    const cross= <div><i class="icon-remove" ></i></div>;
    const[state,setstate]=useState(plus);
    const [para,setPara]=useState(false);
    const change = () =>{
        if(state===plus && para===false){
            setstate(cross);
            setPara(true);
        }
        else{
            setstate(plus);
            setPara(false);
        }
    }
 return<>
    <div className="faq-contain" onClick={change}>
        <div className="question">  {props.question} </div>
        <div style={{color:"white"}}>{state}</div>
    </div>
    <div className="faq-contain-ans" style={{display:para?"block":"none"}} >
        <div className="question" >  {props.answer} </div>
        
    </div>
 </>
}

export default Accord;