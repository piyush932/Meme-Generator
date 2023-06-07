import React from "react"

export default function Header() {
    return (
        <div className="header">
            <div className="header-base">
            <img 
                src={require('./../images/troll-face.png')}
                className="header--image"
                alt="troll-face"
            />
            <h1 className="header--title">Meme Generator</h1>
            </div>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}