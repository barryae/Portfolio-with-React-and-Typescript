import * as React from "react";
import Card from "./Card"

export class Projects extends React.Component<{ projects: any[] }> {
    render() {

        let projectItems = this.props.projects.filter((project: any, i: number) =>
            (i === 1 || i === 3 || i === 7)
        ).map((project: any, i: number) => {
            return (
                <Card name={project.name}
                    url={project.html_url}
                    description={project.description}
                    projectNumber={i}
                    key={i} />
            )
        });

        return (
            <div>
                <div>
                    <div className="theme sectionHeader accent">
                        <div className="content">
                            Recent Projects:
                        </div>
                    </div>
                    <div className="projectsContainer content">
                        {projectItems}
                    </div>
                </div>
            </div>
        )
    }
}
