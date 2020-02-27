import * as React from "react";

export default function BigWord(props: { word: string }) {
    return (
        <div className="title">
            <div className="content">
                {props.word}
            </div>
        </div>
    )
}