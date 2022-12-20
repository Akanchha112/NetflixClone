import React from "react";
// import { NavLink } from "react-router-dom";
import img from '../logo/netflix.svg';
import avtar from '../logo/avtar.png';

import 'D:/visual S/web dev/reactPRactice/netflix-clone/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    
  if ( document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 100%)";
  }
  else{
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 10%)";
  }
}

const Nav = () => {
   
    return <>
        <div className="nav " id="navbar" style={{}}>
            <div className=" d-flex align-items-center ">
                <img src={img} style={{width:"80px"}} className="ms-3 "/>
                {/* <ul className=" d-flex list-unstyled mt-3 ms-4">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul> */}
            </div>
            <div className="text-white" >
                <span><i class="icon-search"></i> </span>
                <span><i class="icon-bell-alt"></i></span>
                <img src={avtar} className="Avtar_logo ms-3" alt="Avatar pic" style={{width:"50px"}} />
                <span><i class="icon-sort-down"></i></span>
            </div>
        </div>
    </>
}

export default Nav;
// console.log(document.documentElement.scrollTop);