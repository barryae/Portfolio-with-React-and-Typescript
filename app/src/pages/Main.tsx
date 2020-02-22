import * as React from "react";
import { useState, useEffect } from "react";
import { Projects } from "../components/Projects"

export const Main = () => {

    const [data, setData] = useState([])
    const gitHubParams: string = "visibility=public&sort=pushed"

    useEffect(() => {
        const fetchData = async () => {
            const list = await fetch("https://api.github.com/users/barryae/repos?" + gitHubParams);
            const results = await list.json();
            console.log(results)
            setData(results)
        }
        fetchData()
    }, []);
    console.log(data)
    return (
        <Projects projects={data} />
    )
}