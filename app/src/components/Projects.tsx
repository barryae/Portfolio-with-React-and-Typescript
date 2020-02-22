import * as React from "react";



export class Projects extends React.Component<{ projects: any[] }> {
    render() {
        let projectItems = this.props.projects.map((project: any, i: number) => {
            return <ProjectCard name={project.name} key={i} />
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
