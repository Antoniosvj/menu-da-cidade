import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Partiners from "../../components/Partiners/Partiners";
import bootstrap from 'react-bootstrap';
import './Home.css';

function Home(){
    return (
        <>
            <HeaderHome/>
            
            <section className="section-title">
                <img src="/image/pratos/sushi.jpg" alt="" />
                <h1>Descubra sabores únicos e cardápios irresistíveis</h1>
            </section>
            <section >
                <div className="container-partiners">
                    <h4>Parceiros</h4>
                </div>
                <Partiners />
            </section>
            <Footer />
        </>
    );
}

export default Home;