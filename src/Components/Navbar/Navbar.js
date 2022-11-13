import React from "react";
import "./Navbar.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./amogus.jpg";

function Navbar() {
    const nav = useNavigate();
    return (
        <div className="nav">
            <div className="nav-info">
                <img className="nav-img"src={logo} alt="amongus"></img>
                <h3>My Website</h3>

            </div>
            <div className="nav-container">
                <button className="nav-item" onClick={(e) => {nav("/")}}>Home</button>
                <button className="nav-item" onClick={(e) => {nav("/projects")}}>Projects</button>
                <button className="nav-item" onClick={(e) => {nav("/education")}}>Education</button>
                <button className="nav-item" onClick={(e) => {nav("/resume")}}>Resume</button>
                <button className="nav-item" onClick={(e) => {nav("/contacts")}}>Contacts</button>
            </div>
        </div>
    )
}

export default Navbar;