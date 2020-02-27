import * as React from 'react';


export default function Contact() {
    return (
        <div className="contact-container">
            <div className="item open-bracket">{'{'}</div>
            <img className="item contact-img" src="https://avatars2.githubusercontent.com/u/55558517?v=4" alt="Avatar" />
            <div className="item links-container">
                <a href="https://www.linkedin.com/in/barry-ervin/" target="_blank" rel="noopener noreferrer"> <img className="icon-img linkedin" src={require('../images/icons/001-linkedin.png')} alt="LinkedIn" /></a>
                <a href="https://github.com/barryae" target="_blank" rel="noopener noreferrer"><img className="icon-img github" src={require('../images/icons/002-cat.png')} alt="GitHub" /></a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSn9iz3KgJEemyd-AxttASQCKXfpE8Z-1PY5q_y-rQIVj17M24EaIL3WHytf8X1KZf8HKX7MhIKhn_Q/pub" target="_blank" rel="noopener noreferrer"><img className="icon-img resume" src={require('../images/icons/003-cv.png')} alt="Resume" /></a>
            </div>
            <div className="item close-bracket">{'}'}</div>
        </div >
    )
}

