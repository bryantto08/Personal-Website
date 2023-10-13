import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
    let [isHoveredAbout, setHoveredAbout] = useState(false);
    let [isHoveredExperience, setHoveredExperience] = useState(false);

    function onHover(typeHover) {
        if (typeHover === "about") {
            setHoveredAbout(true);
        }
        if (typeHover === "experience") {
            setHoveredExperience(true);
        }
        
    }

    function onHoverLeave(typeHover) {
        if (typeHover === "about") {
            setHoveredAbout(false);
        }
        if (typeHover === "experience") {
            setHoveredExperience(false);
        }
        
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
                <div className="hover-options">
                    <div id="about-me" className="about-me" onMouseOver={(e) => onHover("about")} onMouseOut={(e) => onHoverLeave("about")}>
                        About Me
                    </div>
                    <div id="experience" className="experience" onMouseOver={(e) => onHover("experience")} onMouseOut={(e) => onHoverLeave("experience")}>
                        Experience
                    </div>
                </div>

                {isHoveredAbout && (
                    <div>
                        <h3 className="header">Hello! My name is Bryant To!</h3>
                        <h4 className="header">About Me:</h4>
                        <ul>
                        <li>I'm currently a Junior at New York University pursuing
                            a Bachelors Degree in Computer Science!
                        </li>
                        <li>
                            I consider myself a highly-motivated and driven individual, focusing on creating projects and solving problems
                            that can help me grow as a Software Engineer.
                        </li>
                        <li>
                            I mainly work in Python, but I have also created projects in Java and JavaScript.
                        </li>
                        <li>
                            I am experienced in created REST APIs across multiple frameworks such as Django, Flask, Spring Boot, etc. and have
                            deployed applications on multiple cloud-computing platforms such as Amazon Web Services and Google Cloud Platform.
                        </li>
                        </ul>
                        <h4 className="header">Hobbies and Interests</h4>
                        <ul>
                            <li>I'm a big fan of American Football and a bigger fan of the Dallas Cowboys!</li>
                        </ul>
                    </div>
                )}
                { isHoveredExperience && (
                    <div>
                        <h3 className="header">Experiences</h3>
                        <div className="experience-content">
                            <div className="experience-text">
                                <h3>StoopedLLC</h3>
                                <h5>Led the development of a cross-platform mobile application for discovering second-hand furniture in NYC.</h5>
                                <p>Developed the Backend Systems for the application including:</p>
                                <ul>
                                    <li>Implementing a streamlined REST API using the Django framework.</li>
                                    <li>Optimizing data management with PostgreSQL.</li>
                                    <li>Engineered a live-proximity geospatial feature using a geohashing algorithm.</li>
                                    <li>Deployed Application onto AWS Elastic Beanstalk.</li>
                                </ul>
                            </div>
                            <img className="discord-project-img" alt="logo"></img>
                        </div>  
                    </div>
                )}
                
            </div>

    )
}


export default Home;