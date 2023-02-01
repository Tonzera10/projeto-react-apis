import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Base_Url_Pokemons } from "../Links/apiPokemons";
import bug from "../assets/Type/bug.png"
import fire from "../assets/Type/fire.png"
import flying from "../assets/Type/flying.png"
import grass from "../assets/Type/grass.png"
import normal from "../assets/Type/normal.png"
import poison from "../assets/Type/poison.png"
import water from "../assets/Type/water.png"
import { ClassFirst, ClassSecond, StyleImgClass, StyleTextClass } from "../Components/PokemonCard/PokemonCardStyle";

function GlobalState({ children }) {
  const [pokeList, setPokeList] = useState([]);

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
    pokeList.types[0].type.map((type)=>{
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
          {pokeList.types?.length > 1 ?
            <>
              <ClassFirst>
                <StyleImgClass />
                <StyleTextClass>{pokeList.types[0].type.name}</StyleTextClass>
              </ClassFirst>
              <ClassSecond>
                <StyleImgClass />
                <StyleTextClass>Poison</StyleTextClass>
              </ClassSecond>
            </>
          :
            <ClassFirst>
                <StyleImgClass />
                <StyleTextClass>{pokeList.types[0].type.name}</StyleTextClass>
            </ClassFirst>
          }
        </>
      )
    })
  }

  useEffect(() => {
    getItens();
  }, []);
  console.log(pokeList);

  const data = {
    pokeList,
    getType
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
