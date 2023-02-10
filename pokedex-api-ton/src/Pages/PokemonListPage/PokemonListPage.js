import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { StyleH1, StyleList } from "./PokemonListStyle";

export const PokemonListPage = () => {
  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Todos Pokemons</StyleH1>
        <PokemonCard />
      </StyleList>
    </>
  );
};
