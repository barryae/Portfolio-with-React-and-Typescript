import * as React from "react";



export class Projects extends React.Component<{ projects: string[] }> {
    render() {
        let projectItems = this.props.projects.map((project, i) => {
            return <ProjectCard name={project} key={i} />
        });
        return (
            <div>
                <p>
                    Projects:
                </p>
                <ul>
                    {projectItems}
                </ul>
            </div>
        )
    }
}

class ProjectCard extends React.Component<{ name: string; key: number }>{
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}
