import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Base_Url_Pokemons } from "../Links/apiPokemons";

function GlobalState({ children }) {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);
  
  const getPokemons = async () => {
    const arrayPokemons = [];

    try {
      const response = await axios.get(Base_Url_Pokemons);
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

  const inDetails = (pokemon) => {
    setDetails(pokemon);
  };

  const findPokemon = (pokemonToFind) => {
    const pokeFind = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToFind.name
    );
    let newbutton = false;
    if (pokeFind) {
      newbutton = true;
    }
    return newbutton;
  };

  const addToPokedex = (pokemonToAdd) => {
    const pokeFind = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!pokeFind) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };
  console.log(pokeList)

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };
  console.log(pokedex);


  const data = {
    pokeList,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    findPokemon,
    inDetails,
    details,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
