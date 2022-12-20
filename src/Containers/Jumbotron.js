import React from "react";
import Jumbottron from "../Jumbottron/Jumbottron";
import jumbodata from "./fixtures/jumbo.json";

const Jumbotron= () => {
    return(
        <div className="jumbot">
            {jumbodata.map((val)=>{
               console.log(val);
                return(
                    
                <Jumbottron
                    key={val.id}
                    id={val.id}
                    direction={val.direction}
                    title={val.title}
                    subtitle={val.subTitle}
                    alt={val.alt}
                />)
            })} 
            </div>
    )
}

export default Jumbotron;