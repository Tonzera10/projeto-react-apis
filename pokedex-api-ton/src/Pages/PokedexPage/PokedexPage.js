import { useContext } from "react";
import Alert from "../../Components/Alert/Alert";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleList, StyleTitle } from "./PokedexStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

export const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex, alertRemove } = context;

  return (
    <>
      {alertRemove && <Alert main={"Oh, no"} text={"O Pokemon foi removida da Pokedex"}/>}
      <Header />
      <StyleList>
        <StyleTitle>Meus Pokémons</StyleTitle>
        {pokedex.map((pokeCard, index) => {
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
      return  <PokemonCard key={index} pokeCard={pokeCard} color={color}/>
      })}
        
      </StyleList>
    </>
  );
};
