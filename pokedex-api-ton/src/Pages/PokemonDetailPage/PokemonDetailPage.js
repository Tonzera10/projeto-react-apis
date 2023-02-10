import Header from "../../Components/Header/Header";
import PokemonCardDetails from "../../Components/PokemonCardDetails/PokemonCardDetails";
import { StyleH1, StyleList } from "./PokemonDetailStyle";

export const PokemonDetailPage = () => {

  return (
    <>
      <Header />
      <StyleList>
        <StyleH1>Detalhes</StyleH1>
        <PokemonCardDetails/>
      </StyleList>
    </>
  );
};
