import * as React from "react";
import Contact from "./Contact"

export function Bio() {
    return (
        <div className="bio theme accent">
            <div className="bio-content content">
                <div className="image-container">
                    <img className="bio-img" src="https://avatars2.githubusercontent.com/u/55558517?v=4" alt="Avatar" />
                </div>
                <p className="bio-text">Full Stack Web Developer creating inspired web-apps using React, JavaScript, and Node. I love quickly adapting to interesting situations involving rapidly changing technology. Let's build something great together.</p>
            </div>
        </div >
    )
} 