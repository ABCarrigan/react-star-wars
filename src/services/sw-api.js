export default function ApiGrabber () {
  return (fetch(`https://swapi.dev/api/starships/`)
    .then((response) => response.json())
    .catch((error) => error.message)
  )
}