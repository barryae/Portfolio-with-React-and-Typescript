import * as React from "react";
import BigWord from "../components/BigWord"

export default function Bio() {
    return (
        <div className="bio theme accent">
            <div className="top-spacer"></div>
            <BigWord word="Hey, I'm Barry." />
            <div className="content">
                <p className="bio-text">
                    I’m a Full Stack Web Developer based in Atlanta, GA.
                </p>
                <p className="bio-text">
                    Unique problems that require interesting technology
                    make me get out of bed in the morning. I specialize in
                    building with React and Node, but I’m constantly expanding
                    my bag of tools. If you have some interesting problems
                    that need solving, I’d love to help.
                </p>
            </div>
        </div >
    )
} 