import './App.css';
import {useState} from 'react';

function App() {

  const[allPoke, setallPoke] = useState([])

  const getPokemon =()=> {
    console.log("You have gotten your pokemon")

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=500")
    .then(response => {
      console.log("***********")
      console.log(response)
      console.log("***********")
      return response.json();
  }).then(response => {
    console.log("!!!!!!!!!!!")
      console.log(response);
      console.log("!!!!!!!")
      setallPoke(response.results)
  }).catch(err=>{
      console.log(err);
  });
  }



  return (
    <div className="App">
      <button onClick={getPokemon}> Get some pokemon! </button>
      {allPoke.map((Poke, idx)=>{
      return <div class="card">
  <div class="card-body">
    <h5 class="card-title">{Poke.name}</h5>
    <p class="card-text">{Poke.url}</p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      })}
    </div>
  );
}

export default App;
