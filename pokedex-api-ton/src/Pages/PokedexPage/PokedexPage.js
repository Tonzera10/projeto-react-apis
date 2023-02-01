import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleList, StyleTitle } from "./PokedexStyle";

export const PokedexPage = () => {

    const context = useContext(GlobalContext);
  const { pokeList } = context;

  return (
    <>
      <Header />
      <StyleList>
        <StyleTitle>Todos Pokemons</StyleTitle>
        {pokeList.map((pokeCard) => {
          return <PokemonCard pokeCard={pokeCard} />;
        })}
      </StyleList>
    </>
  );
};
