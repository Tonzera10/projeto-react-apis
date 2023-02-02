import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Base_Url_Pokemons } from "../Links/apiPokemons";
import { ClassFirst, ClassSecond, StyleImgClass, StyleTextClass } from "../Components/PokemonCard/PokemonCardStyle";

function GlobalState({ children }) {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([])

  const getItens = async () => {
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

  const getType = () => {
    pokeList[0].types[0].type.map((type)=>{
      let typePoke = '';
      let color = '';
      switch (type) {
      case 'poison':
          typePoke = `${poison}`;
          color = '#AD61AE'
          break;
      case 'bug':
          typePoke = `${bug}`;
          color = '#316520'
          break;
      case 'fire':
          typePoke = `${fire}`;
          color = '#F44900'
          break;
      case 'flying':
          typePoke = `${flying}`;
          color = '#6892B0'
          break;
      case 'grass':
          typePoke = `${grass}`;
          color = '#70B873'
          break;
      case 'normal':
          typePoke = `${normal}`;
          color = '#8A8A8A'
          break;
      case 'water':
          typePoke = `${water}`;
          color = '#33A4F5'
          break;      
        default:
          typePoke = '';
          break;
      }
      return(
        <>
          {pokeList.types.map((pokemon)=>{
              return(
                <ClassFirst>
                  <StyleImgClass />
                  <StyleTextClass>{pokemon.type.name}</StyleTextClass>
                </ClassFirst>
              )
              })
            }
        </>
      )
    })
  }

  const addToPokedex = (pokemonToAdd) => {
    const pokeFind = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name);

    if(!pokeFind) {
      const newPokedex = [...pokedex, pokemonToAdd]
      setPokedex(newPokedex)
    }
  }

  const removeToPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name === pokemonToRemove.name)
    setPokedex(newPokedex)
  }
  // console.log(pokeList[0].types)

  useEffect(() => {
    getItens();
  }, []);
  console.log(pokeList);

  const data = {
    pokeList,
    getType,
    pokedex,
    addToPokedex,
    removeToPokedex,

  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
