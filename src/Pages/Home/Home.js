import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
    let [isHoveredAbout, setHoveredAbout] = useState(false);
    let [isHoveredHobbies, setHoveredHobbies] = useState(false);
    let [isHoveredFacts, setHoveredFacts] = useState(false);

    function onHover(typeHover) {
        if (typeHover === "about") {
            setHoveredAbout(true);
        }
        if (typeHover === "hobbies") {
            setHoveredHobbies(true);
        }
        if (typeHover === "facts") {
            setHoveredFacts(true);
        }
        
    }

    function onHoverLeave(typeHover) {
        if (typeHover === "about") {
            setHoveredAbout(false);
        }
        if (typeHover === "hobbies") {
            setHoveredHobbies(false);
        }
        if (typeHover === "facts") {
            setHoveredFacts(false);
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
                    <div id="hobbies-interests" className="hobbies-interests" onMouseOver={(e) => onHover("hobbies")} onMouseOut={(e) => onHoverLeave("hobbies")}>
                        Hobbies and Interests
                    </div>
                    <div className="facts" onMouseOver={(e) => onHover("facts")} onMouseOut={(e) => onHoverLeave("facts")}>
                        Fun Facts
                    </div>
                </div>

                {isHoveredAbout && (
                    <div>
                        <h5>Hello! My name is Bryant To!</h5>
                        <p>I'm currently a sophomore at New York University pursuing
                            a Bachelors Degree in Computer Science!
                        </p>
                    </div>
                )}
                { isHoveredHobbies && (
                    <div>
                        <h5>h1</h5>
                    </div>
                )}
                {isHoveredFacts && (
                    <div>
                        <h5>Fun Facts about me: </h5>
                    </div>   
                )}
                
            </div>

    )
}


export default Home;