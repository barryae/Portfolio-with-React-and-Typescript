import * as React from "react";

export default function Bio() {
    return (
        <div className="bio theme accent">
            <div className="bio-content content">
                <p className="bio-text">I am a Full Stack Web Developer creating inspired web-apps using React, JavaScript, and Node. I love quickly adapting to interesting situations involving rapidly changing technology. Let's build something great together.</p>
                <img className="bio-img" src="https://avatars2.githubusercontent.com/u/55558517?v=4" alt="Avatar" />
                <a href="https://www.linkedin.com/in/barry-ervin/" target="_blank" rel="noopener noreferrer"> <img className="icon-img linkedin" src={require('../images/icons/001-linkedin.png')} alt="LinkedIn" /></a>
                <a href="https://github.com/barryae" target="_blank" rel="noopener noreferrer"><img className="icon-img github" src={require('../images/icons/002-cat.png')} alt="GitHub" /></a>
                <a href="https://docs.google.com/document/d/1zeHcmiTLDXhtNK4r0J-RWSq7wwJSzzGunV5pn5p8km4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="icon-img resume" src={require('../images/icons/003-cv.png')} alt="Resume" /></a>
            </div>
        </div >
    )
} 