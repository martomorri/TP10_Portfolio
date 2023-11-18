import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import Contacto from "./Contacto";


function IndexPage() {
    return (
        <div style={{ padding: 10 }}>
            <div id="home"><Home /></div>
            <div id="skills"><Skills /></div>
            <div id="form-contacto"><Contacto /></div>
        </div>
    );
}

export default IndexPage
