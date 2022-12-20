import React from "react";
import Nav from '../Components/Nav';
import "../index.css"
import Mainbody from "../Components/Mainbody";
import Category from '../Components/Category';
import requests from "../Components/request";
const dashboard = () => {
    return (
        <>
        <div className="main-container">

        
            <Nav />
            <Mainbody />
            <Category title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Category title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Category title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Category title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Category title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Category title="Documentries" fetchUrl={requests.fetchDocumentaries} />
            </div>
        </>
    )
}

export default dashboard;