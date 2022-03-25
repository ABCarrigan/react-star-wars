import apiGrabber from './sw-api.js'
import React, {useState, useEffect} from "react"


export default function AllStarships(props) {
    const [starship, setStarship] = useState([])
    useEffect(() => {
        apiGrabber().then(response => response.json())
        .then(data => setStarship(data))
    }, [])
    return(
        starship
    )
}