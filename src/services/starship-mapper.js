import ApiGrabber from './sw-api.js'
import React, {useState, useEffect} from "react"

export default function ShipsScreen() {
    const [ships, setShips] = useState([])
    useEffect(() => {
        ApiGrabber()
            .then(response => setShips(response.results))
            .catch((error) => error.message)
    }, [])

    return(
        <div className="shipCardHolder">
            {ships.map((each, i)=> {
                return(
                    <div className="starshipCard">
                        {each.name}
                    </div>
                )
            })}
        </div>
    )
}