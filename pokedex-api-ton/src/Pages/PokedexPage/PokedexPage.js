import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCardPokedex from "../../Components/PokemonCardPokedex/PokemonCardPokedex";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleList, StyleTitle } from "./PokedexStyle";

export const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <>
      <Header />
      <StyleList>
        <StyleTitle>Meus Pokemons</StyleTitle>
        {pokedex.map((pokeCard) => {
      let color = "";
      switch (pokeCard.types[0].type.name) {
        case "grass":
          color = "#729F92";
          break;
        case "fire":
          color = "#EAAB7D";
          break;
        case "water":
          color = "#71C3FF";
          break;
        case "bug":
          color = "#76A866";
          break;
        case "normal":
          color = "#BF9762";
          break;

        default:
          break;
      }
      return  <PokemonCardPokedex pokeCard={pokeCard} color={color}/>
      })}
        
      </StyleList>
    </>
  );
};
