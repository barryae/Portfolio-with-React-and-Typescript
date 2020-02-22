import * as React from "react";
import Card from "./Card"

export class Projects extends React.Component<{ projects: any[] }> {
    render() {
        let projectItems = this.props.projects.map((project: any, i: number) => {
            return <Card name={project.name} description={project.description} key={i} />
        });
        return (
            <div>
                <h3>
                    Recent Projects:
                </h3>
                <div>
                    {projectItems}
                </div>
            </div>
        )
    }
}
