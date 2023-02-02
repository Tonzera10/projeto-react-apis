import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleH1, StyleList } from "./PokemonListStyle";

export const PokemonListPage = () => {
  const context = useContext(GlobalContext);
  const { pokeList, getType } = context;
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Todos Pokemons</StyleH1>
        {pokeList.map((pokeCard, index) => {
          return <PokemonCard key={index} pokeCard={pokeCard} />;
        })}
      </StyleList>
    </>
  );
};
