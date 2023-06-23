import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Listings = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div>
            <div>hello</div>
            <button onClick={handleGoBack}>Go Back</button>
            <Footer />
        </div>
    );
};

export default Listings;
