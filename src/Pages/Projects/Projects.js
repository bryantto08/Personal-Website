import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "./ProjectImages/discord-ss.png";
import "./Projects.css";
import scraperLogo from "./ProjectImages/scraper.png";

function Projects() {
    const [DiscordBot, setDiscordBot] = useState(false);
    const [ESPNScraper, setScraper] = useState(false);

    function botOn () {
        setScraper(false);
        setDiscordBot(true);
    }

    function scraperOn() {
        setDiscordBot(false);
        setScraper(true);
    }
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h2>My Projects: </h2>
                <div className="project-options">
                    <button className="project-button" onClick={(e) => scraperOn()}>ESPN Scraper</button>
                    <button className="project-button" onClick={(e) => botOn()}>Discord Bot</button>
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
                <img className="discord-project-img" src={logo} alt="logo"></img>
            </div>  
                )}
                {ESPNScraper && (
                    <div className="project-content">
                    <div className="project-text">
                        <h3>ESPN Scraper</h3>
                        <h5>Uses Selenium and BeautifulSoup to retrieve NFL information from the ESPN website.</h5>
                        <p>Retrieves Football information such as:</p>
                        <ul>
                            <li>NFL Teams and their statistical leaders</li>
                            <li>Individual Player Statistics</li>
                            <li>WIP: Planning to retrieve news articles and links from ESPN website.</li>
                        </ul>
                    </div>
                    <img className="scraper-project-img" src= {scraperLogo} alt="scraper-logo"></img>
                    </div>
                )}
            </div>

        </div>
    )
}
export default Projects;