import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "./ProjectImages/amogus.jpg";
import "./Projects.css";
function Projects() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h2>My Projects: </h2>
                <div className="project-options">
                    <button className="project-button">ESPN Scraper</button>
                    <button className="project-button">Discord Bot</button>
                </div>
                <div>
                    <img className="project-img" src={logo} alt="logo"></img>
                </div>
            </div>

        </div>
    )
}
export default Projects;