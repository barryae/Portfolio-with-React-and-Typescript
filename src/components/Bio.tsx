import * as React from "react";
import BigWord from "../components/BigWord"

export default function Bio() {
    return (
        <div className="bio theme accent">
            <div className="top-spacer"></div>
            <BigWord word="Hey, I'm Barry." />
            <div className="content">
                <p className="bio-text">I am a Full Stack Web Developer creating inspired web-apps using React, JavaScript, and Node. I love quickly adapting to interesting situations involving rapidly changing technology. Let's build something great together.</p>
            </div>
        </div >
    )
} 