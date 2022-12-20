
import React from "react";
import homet from "./images/hometv.jpg";
import homei from "./images/home-imac.jpg";
import homem from "./images/home-mobile.jpg";
import homek from "./images/home-kid.png";
import "./style.css";
const Jumbottron = (props) => {
    return <>
        <div className="jumbo">
            <div className="jumbo-container"
                style={{ flexDirection: `${props.direction}` }}
            >

                <div className="pane">
                    <h1>{`${props.title}`}</h1>
                    <h2>{`${props.subtitle}`}</h2>

                </div>
                <div className="pane">
                    <img src={`${props.id}` == 1 ? homet : `${props.id}` == 2 ? homem : `${props.id}` == 3 ? homei : homek} alt={`${props.alt}`} />
                </div>
                {/* <p>{restprops}</p> */}

            </div>
        </div>
    </>
}

export default Jumbottron;