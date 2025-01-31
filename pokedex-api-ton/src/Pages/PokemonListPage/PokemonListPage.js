import { useContext } from "react";
import Alert from "../../Components/Alert/Alert";
import Error from "../../Components/Error/Error";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StileTitle, StyleH1, StyleList } from "./PokemonListStyle";

export const PokemonListPage = () => {
  const context = useContext(GlobalContext);
  const { filteredPokeList, gotcha, isLoading, error } =
    context;

  return (
    <>
      {gotcha && <Alert main={"Gotcha!"} text={"O Pokemons foi adicionado à Pokedex"}/>}
      <Header />
      <StyleList>
        <StileTitle>
          <StyleH1>Todos Pokémons</StyleH1>
        </StileTitle>
        {isLoading && <Loading/>}
		    {!isLoading && error && <Error/>}
		    {!isLoading && 
         filteredPokeList().map((pokeCard, index) => {
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
      return <PokemonCard key={index} pokeCard={pokeCard} color={color}/>
    })}
      </StyleList>
    </>
  );
};
