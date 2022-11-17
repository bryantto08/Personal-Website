import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "./ProjectImages/discord-ss.png";
import "./Projects.css";
function Projects() {
    const [DiscordBot, setDiscordBot] = useState(false);
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h2>My Projects: </h2>
                <div className="project-options">
                    <button className="project-button">ESPN Scraper</button>
                    <button className="project-button" onClick={(e) => {setDiscordBot(true)}}>Discord Bot</button>
                </div>
                {DiscordBot && (
                <div className="project-content">
                <div className="project-text">
                    <h3>Discord Bot</h3>
                    <h5>Fetches information from the Riot Games API and displays it to the user via embeds.</h5>
                    <p>Retrieves League of Legends information such as:</p>
                    <ul>
                        <li>Player's Match History</li>
                        <li>Player's Statistics</li>
                        <li>Player's Game Ranks</li>
                        <li>etc.</li>
                    </ul>
                </div>
                <img className="project-img" src={logo} alt="logo"></img>
            </div>  
                )}
            </div>

        </div>
    )
}
export default Projects;