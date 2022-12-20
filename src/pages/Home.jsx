import React from "react";
import Jumbo from "../Containers/Jumbotron";
import Accordion from "../Containers/Accordion/Accordion";
import Footer from "../Containers/footer/footer";
import Header from "../Containers/Header/header";
const Home = () => {
    return (
        <>
        
            <Header/>
            <Jumbo />
            <Accordion />
            <Footer />
        </>
    )
}

export default Home;