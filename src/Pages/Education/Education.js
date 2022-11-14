import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Education.css";
function Education() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="nyu-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxCP2J7oeWSNz4QyysUsj66aFI9wUxs5o8w&usqp=CAU" alt="nyu"></img>
                <div className="school-text">
                    <h3 style={{marginLeft: "20px"}}>New York University / Class of 2025</h3>
                    <ul>
                        <li>GPA: 4.0/ 4.0</li>
                        <li>Dean's List (2021-2022)</li>
                        <li>Pursuing B.A. in Computer Science</li>
                    </ul>
                </div>

            </div>
            <div className="class-body">
                <div style={{marginLeft: "20px"}}>
                    <h3>Classes that I have taken:</h3>
                    <ul>
                        <li>CS101: Intro to Computer Science</li>
                        <li>CS102: Data Structures</li>
                        <li>MATH121: Calculus I</li>
                        <li>MATH120: Discrete Math</li>
                    </ul>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <h3>Currently Taking:</h3>
                    <ul>
                        <li>CS201: Computer Systems Org</li>
                        <li>CS310: Basic Algorithms</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default Education;