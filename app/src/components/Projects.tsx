import * as React from "react";
import Card from "./Card"

export class Projects extends React.Component<{ projects: any[] }> {
    render() {
        let projectItems = this.props.projects.map((project: any, i: number) => {
            return <Card name={project.name} url={project.html_url} description={project.description} projectNumber={i} key={i} />
        });
        return (
            <div>
                <div className="theme sectionHeader accent">
                    Recent Projects:
                </div>
                <div className="projects main">
                    <div className="projectsContainer">
                        {projectItems}
                    </div>
                </div>
            </div>
        )
    }
}
