import * as React from "react";
import BigWord from "../components/BigWord"

export default function Card(props: { name: string; key: number; description: string; projectNumber: number; url: string }) {
    function repoNameFormat(name: string) {
        let noDash = name.split("-").join(" ")
        let caseCorrect = ((noDash.split(''))[0].toUpperCase()) + noDash.slice(1)
        return caseCorrect;
    }

    let string = "project" + props.projectNumber
    return (
        <div className={"card project" + string}>
            <div>
            </div>
            <div className={"card-header " + string + "-header"}>
                <a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">{repoNameFormat(props.name)}</a>
            </div>
            <img className="card-img" src={require('../images/project' + props.projectNumber + ".png")} alt="project" />
            <div className={"card-text " + string + "-text"}>
                {props.description}
            </div>
        </div>

    )
}