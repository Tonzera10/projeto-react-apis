import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleH1, StyleList } from "./PokemonDetailStyle";

export const PokemonDetailPage = () => {
  const context = useContext(GlobalContext);
  const { details } = context;

  let color = "";
  switch (details.types[0].type.name) {
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

  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Detalhes</StyleH1>
        <PokemonCard pokeCard={details} color={color}/>
      </StyleList>
    </>
  );
};
