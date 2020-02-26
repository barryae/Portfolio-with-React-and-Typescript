import * as React from 'react';


export default function Contact() {
    return (
        <div className="contact-container content">
            <div className="contact sectionHeader">Contact:</div>
            <a href="https://www.linkedin.com/in/barry-ervin/" target="_blank"> <img className="icon-img linkedin" src={require('../images/icons/001-linkedin.png')} alt="LinkedIn" /></a>
            <a href="https://github.com/barryae" target="_blank"><img className="icon-img github" src={require('../images/icons/002-cat.png')} alt="GitHub" /></a>
            <a href="https://docs.google.com/document/d/1zeHcmiTLDXhtNK4r0J-RWSq7wwJSzzGunV5pn5p8km4/edit?usp=sharing" target="_blank"><img className="icon-img resume" src={require('../images/icons/003-cv.png')} alt="Resume" /></a>
        </div >
    )
}