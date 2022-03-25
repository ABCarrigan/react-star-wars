const swapi = require('swapi-node')
export const fetchShips = () => {
  swapi.get('https://swapi.dev/api/starships/').then((result) => {
    console.log(result);
})
}

// export default function ApiGrabber (ship) {
//   return fetch(`https://swapi.dev/api/starships/${ship}`)
// }