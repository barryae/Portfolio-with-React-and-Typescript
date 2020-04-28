import * as React from "react";
import Card from "./Card"

export default function Projects(props: { projects: any[] }) {

    let projectItems = props.projects.filter((project: any, i: number) =>
        (project.name === "Smiirl-Server-with-CronJob" || project.name === "fermention" || project.name === "ebookpromos")
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
            <div className="middle-spacer"></div>
            <div>
                <div className="projectsContainer content">
                    {projectItems}
                </div>
            </div>
        </div>
    )
}
