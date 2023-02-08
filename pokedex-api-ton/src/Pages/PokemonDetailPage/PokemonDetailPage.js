import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { StyleH1, StyleList } from "./PokemonDetailStyle";

export const PokemonDetailPage = () => {
  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Detalhes</StyleH1>
        <PokemonCard />
      </StyleList>
    </>
  );
};
