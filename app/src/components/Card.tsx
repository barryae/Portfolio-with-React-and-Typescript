import * as React from "react";

export default class Card extends React.Component<{ name: string; key: number; description: string; projectNumber: number; url: string }>{
    render() {

        function repoNameFormat(name: string) {
            let noDash = name.split("-").join(" ")
            let caseCorrect = ((noDash.split(''))[0].toUpperCase()) + noDash.slice(1)
            return caseCorrect;
        }

        return (
            <div className={"card project" + this.props.projectNumber}>
                <div>
                </div>
                <div className="card-header">
                    <a className="card-link" href={this.props.url}>{repoNameFormat(this.props.name)}</a>
                </div>
                <img className="card-img" src={require('../images/project' + this.props.projectNumber + ".png")} alt="project" />
                <div className="card-text">
                    {this.props.description}
                </div>
            </div>

        )
    }
}