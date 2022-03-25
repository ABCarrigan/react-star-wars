// const swapi = require('swapi-node')
// export const fetchShips = () => {
//   swapi.get('https://swapi.dev/api/starships/').then((result) => {
//     console.log(result);
// })
// }

export default function ApiGrabber () {
  return (fetch(`https://swapi.dev/api/starships/`)
    .then((response) => response.json())
    .catch((error) => error.message)
  )
}