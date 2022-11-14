import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "./Resume.jpg";
import "./Resume.css";
function Resume() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{justifyContent: "center"}}>
                <img className="resume"src= {logo} alt="resume"></img>
            </div>

        </div>
    )
}
export default Resume;