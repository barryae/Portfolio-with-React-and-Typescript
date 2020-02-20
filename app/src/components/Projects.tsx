import * as React from "react";



export class Projects extends React.Component<{ projects: string[] }> {
    render() {
        let projectItems = this.props.projects.map((project, i) => {
            return <ProjectCard name={project} key={i} />
        });
        return (
            <div>
                <h3>
                    Projects:
                </h3>
                <div>
                    {projectItems}
                </div>
            </div>
        )
    }
}

class ProjectCard extends React.Component<{ name: string; key: number }>{
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}
