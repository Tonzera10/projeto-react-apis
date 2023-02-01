import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleH1, StyleList } from "./PokemonListStyle";

export const PokemonListPage = () => {
  const context = useContext(GlobalContext);
  const { pokeList, getType } = context;

  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Todos Pokemons</StyleH1>
        {pokeList.map((pokeCard) => {
          return <PokemonCard pokeCard={pokeCard} />;
        })}
      </StyleList>
    </>
  );
};
