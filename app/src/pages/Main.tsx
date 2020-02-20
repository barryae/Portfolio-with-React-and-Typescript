import * as React from "react";
import { Projects } from "../components/Projects"

export const Main = () => {
    const list: [] = []

    fetch("https://api.github.com/users/barryae/repos?visibility=public&sort=created")
        .then(results => {
            return results.json()
        })
        .then((myJson) => {
            console.log(myJson)
        })

    return (
        // Image pulled in from GitHub
        <Projects projects={list} />
        //Articles
    )
}