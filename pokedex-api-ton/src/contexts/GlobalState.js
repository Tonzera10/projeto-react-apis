import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";


function GlobalState({ children }) {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState({});
  const [gotcha, setGotcha] = useState(false);
  const [alertRemove, setAlertRemove] = useState(false)

  useEffect(() => {
    getPokemons();
    getpokemonInPokedex()
  }, []);

  useEffect(() => {
    setPokemonInPokedex()
  }, [pokedex])

  const setPokemonInPokedex = () => {
    const pokemon = JSON.stringify(pokedex);
    localStorage.setItem("pokedex", pokemon);
  };
  const getpokemonInPokedex = () => {
    const pokemons = JSON.parse(localStorage.getItem("pokedex"));
    if (pokemons?.length > 0) {
      return setPokedex(pokemons);
    }
  };
  
  const getPokemons = async () => {
    const arrayPokemons = [];

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      const poke = response.data.results;

      try {
        for (let i in poke) {
          let pokeInfo = await axios.get(poke[i].url);
          arrayPokemons.push(pokeInfo.data);
        }
      } catch (error) {
        console.log(error.response);
      }
      setPokeList(arrayPokemons);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getDetails = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setDetails(response.data)
    }catch (error) {
      alert(error.response)
    }
  }

  const filteredPokeList = () =>
    pokeList.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


  const addToPokedex = (pokemonToAdd) => {
    const pokeFind = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!pokeFind) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      setGotcha(true)
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
    setAlertRemove(true)
  };


  const data = {
    pokeList,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    details,
    filteredPokeList,
    setDetails,
    getDetails,
    gotcha,
    setGotcha,
    alertRemove,
    setAlertRemove
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
