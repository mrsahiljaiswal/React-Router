import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData();
    return (
        <>
        
        <h2>GitHub</h2>
        <img src={data.avatar_url} alt="" />
        </>
    ) 
}

export default Github

export const fetchGitData = async ()=>{

        return (
        await fetch("https://api.github.com/users/mrsahiljaiswal")
        .then((res)=>res.json())
        .then((data)=>data)
        )
}

