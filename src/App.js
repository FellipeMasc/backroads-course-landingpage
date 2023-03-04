import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <Hero></Hero>

            <About></About>

            <Services></Services>

            <Tours></Tours>

            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
