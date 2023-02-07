import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pokemonHeader from "../../assets/PokemonHeader.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToPokedex, goToPokeList } from "../../router/cordinator";
import { ButtonCaptur } from "../PokemonCard/PokemonCardStyle";
import { StyleButton, StyleHeader, StyleImg } from "./HeaderStyle";

function Header() {
  const context = useContext(GlobalContext);
  const { findPokemon, pokeList, addToPokedex, removeToPokedex } = context;
  const navigate = useNavigate();
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <StyleHeader>
            <StyleImg src={pokemonHeader} />
            <StyleButton onClick={() => goToPokedex(navigate)}>
              Pokedex
            </StyleButton>
          </StyleHeader>
        );
      case "/pokedex":
        return (
          <StyleHeader>
            <StyleButton onClick={() => goToPokeList(navigate)}>
              Pokedex
            </StyleButton>
            <StyleImg src={pokemonHeader} />
          </StyleHeader>
        );
      case "/details/:id":
        return (
          <StyleHeader>
            <StyleImg src={pokemonHeader} />
            {findPokemon ? (
              <ButtonCaptur onClick={() => addToPokedex(pokeList)}>
                Capturar!
              </ButtonCaptur>
            ) : (
              <ButtonCaptur onClick={() => removeToPokedex(pokeList)}>
                Excluir!
              </ButtonCaptur>
            )}
          </StyleHeader>
        );
      default:
        return (
          <StyleHeader>
            <StyleImg src={pokemonHeader} />
            <StyleButton onClick={() => goToPokeList(navigate)}>
              Voltar
            </StyleButton>
          </StyleHeader>
        );
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
