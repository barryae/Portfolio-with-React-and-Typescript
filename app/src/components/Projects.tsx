import * as React from "react";



export class Projects extends React.Component<{ projects: any[] }> {
    render() {
        let projectItems = this.props.projects.map((project: any, i: number) => {
            return <ProjectCard name={project.name} description={project.description} key={i} />
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

class ProjectCard extends React.Component<{ name: string; key: number; description: string; }>{
    render() {
        return (
            <div>
                <h4>
                    {this.props.name}
                </h4>
                <p>
                    {this.props.description}
                </p>
            </div>

        )
    }
}
