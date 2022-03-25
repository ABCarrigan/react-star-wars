import AllStarships from './services/starship-mapper.js'
import StarshipCard from './services/starshipcard.js';
import './App.css'
function App() {
  return (
    <div>
      <StarshipCard 
      prop={AllStarships}
      />
    </div>
  );
}

export default App;
