import React from "react";
import Landing from "./components/Landing/Landing";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Landing />
            <Reviews />
            <Contact />
            <Footer />
        </>
    );
}
