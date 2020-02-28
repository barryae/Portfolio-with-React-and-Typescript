import * as React from "react";
import { useState, useEffect } from "react";
import Projects from "../components/Projects"
import Bio from "../components/Bio"
import Contact from "../components/Contact"

export default function Main() {

    const [data, setData] = useState([])
    const gitHubParams: string = "visibility=public&sort=created"
    useEffect(() => {
        const fetchRepos = async () => {
            const list = await fetch("https://api.github.com/users/barryae/repos?" + gitHubParams);
            const repos = await list.json();
            setData(repos)
        }
        fetchRepos()
    }, []);

    return (
        <div className="main">
            <Bio />
            <Contact />
            <Projects projects={data} />
        </div>
    )
}