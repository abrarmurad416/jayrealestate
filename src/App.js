import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Listings from "./components/Listings/Listings";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
            </Routes>
        </Router>
    );
};

export default App;
