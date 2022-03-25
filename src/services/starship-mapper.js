import { fetchShips } from './sw-api.js'
import React, {useState, useEffect} from "react"

const ShipsScreen = props => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        fetchShips()
            .then(response => response.json())
        .then(data => setShips(data));
    }, []);

    return(console.log(ships)
    )
}

export default ShipsScreen

// // export default function AllStarships(i) {
// //     const [starship, setStarship] = useState([])
// //         useEffect(() => {
// //             ApiGrabber(i).then(res => res.json())
// //             .then((data => setStarship(data.name))
// //         return(
// //                 starship
// //             )
// //         }
   

// export default function AllStarships(props) {
//     const [starship, setStarship] = useState([])
//     useEffect(() => {
//         ApiGrabber().then(response => response.json())
//         .then(data => setStarship(data.results[0].name))
//     }, [])
//     return(
//         starship
//     )
// }


// // export default function AllStarships(props) {
// //     const [starship, setStarship] = useState([])
// //     useEffect(() => {
// //         ApiGrabber().then(response => response.json())
// //         .then(data => setStarship(data.results[2]))
// //     }, [])
// //     return(
// //         starship
// //     )
// // }

// // export default function AllStarships(props) {
// //     ApiGrabber(2)
// //     console.log(`${ApiGrabber(2)}`)
// // }