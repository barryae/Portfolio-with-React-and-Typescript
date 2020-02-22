import * as React from "react";
import { useState, useEffect } from "react";
import { Projects } from "../components/Projects"

export const Main = () => {

    const [data, setData] = useState([])
    const gitHubParams: string = "visibility=public&sort=pushed"

    useEffect(() => {
        const fetchRepos = async () => {
            const list = await fetch("https://api.github.com/users/barryae/repos?" + gitHubParams);
            const repos = await list.json();
            console.log(repos)
            setData(repos.slice(0, 3))
        }
        fetchRepos()
    }, []);


    console.log(data)
    return (
        <Projects projects={data} />
    )
}