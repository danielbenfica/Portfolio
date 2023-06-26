import React from 'react';

import './style.css'
import Profile from "../../components/Profile";
import Contacts from "../../components/Contacts";
import Tecnologys from "../../components/Tecnologys";
import Experiences from "../../components/Experiences";
import Education from "../../components/Education";
import Topics from "../../components/Topics";
import MyProjects from "../../components/MyProjects";

function Home() {
 /* const [pokemons, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');

  useEffect(() => {
    async function getPokemon(){
      const response = await axios.get('https://api.github.com/repos/facebook/react/projects')
      console.log(response)
      setPokemon(response.data.results)
    }
    getPokemon()
  }, [])

  function changeValue(event){
    setSearchPokemon(event.target.value)
    console.log(pokemons)
  }

  const filterdPokemon = pokemons.filter(pokemon => pokemon.name.includes(searchPokemon))

*/
  return (
    /*
    <>
      <h1>Home</h1>
      <input type="text" id="pokemon" value={searchPokemon} onChange={changeValue}/>
      {filterdPokemon.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
    */

    <>
      <article className="container">
        <div className="lateralBar">
          <Profile />
          <Contacts />
          <Tecnologys />
        </div>
        <main className="content">
          <Topics title={"My Projects"}/>
          <MyProjects />
        </main>
      </article>
    </>
  );
}

export default Home;
