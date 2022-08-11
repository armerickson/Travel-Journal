import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img className="header--world-icon" src={require("../images/globe.png")} alt="Icon of a globe"/>
            <h4 className="header--title">my travel journal.</h4>
        </header>
    )
}
