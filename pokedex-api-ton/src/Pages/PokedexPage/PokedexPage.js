import Header from "../../Components/Header/Header";
import PokemonCardPokedex from "../../Components/PokemonCardPokedex/PokemonCardPokedex";
import { StyleList, StyleTitle } from "./PokedexStyle";

export const PokedexPage = () => {

  return (
    <>
      <Header />
      <StyleList>
        <StyleTitle>Meus Pokemons</StyleTitle>
        <PokemonCardPokedex/>
      </StyleList>
    </>
  );
};
