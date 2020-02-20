import * as React from "react";
import { Projects } from "../components/Projects"

export const Main = () => {
    let list = ["Project 1", "Project 2", "Project 3"]
    return (
        // Image pulled in from GitHub
        <Projects projects={list} />
        //Articles
    )
}