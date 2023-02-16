import { useContext } from "react";
import Alert from "../../Components/Alert/Alert";
import Header from "../../Components/Header/Header";
import PokemonCardDetails from "../../Components/PokemonCardDetails/PokemonCardDetails";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleH1, StyleList } from "./PokemonDetailStyle";

export const PokemonDetailPage = () => {
  const context =useContext(GlobalContext)
  const {alertRemove, gotcha} = context

  return (
    <>
      {alertRemove && <Alert main={"Oh, no"} text={"O Pokemon foi removida da Pokedex"}/>}
      {gotcha && <Alert main={"Gotcha!"} text={"O Pokemons foi adicionado à Pokedex"}/>}
      <Header />
      <StyleList>
        <StyleH1>Detalhes</StyleH1>
        <PokemonCardDetails/>
      </StyleList>
    </>
  );
};
