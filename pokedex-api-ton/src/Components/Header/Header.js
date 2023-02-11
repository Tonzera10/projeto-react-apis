import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pokemonHeader from "../../assets/PokemonHeader.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToPokedex, goToPokeList } from "../../router/cordinator";
import seta from "../../assets/back.png";

import {
  ButtonBackAll,
  ButtonCaptur,
  ButtonRemove,
  StyleBackAll,
  StyleButton,
  StyleHeader,
  StyleImg,
  StyleSeta,
} from "./HeaderStyle";

function Header() {
  const context = useContext(GlobalContext);
  const { findPokemon, addToPokedex, removeFromPokedex, details } = context;
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
            <StyleBackAll>
              <StyleSeta src={seta} />
              <ButtonBackAll onClick={() => goToPokeList(navigate)}>
                Todos Pokemons
              </ButtonBackAll>
            </StyleBackAll>
            <StyleImg src={pokemonHeader} />
          </StyleHeader>
        );
      default:
        return (
          <StyleHeader>
            <StyleBackAll>
              <StyleSeta src={seta} />
              <ButtonBackAll onClick={() => goToPokeList(navigate)}>
                Todos Pokemons
              </ButtonBackAll>
            </StyleBackAll>
            <StyleImg src={pokemonHeader} />
            {findPokemon ? (
              <ButtonCaptur onClick={() => addToPokedex(details)}>
                Capturar!
              </ButtonCaptur>
            ) : (
              <ButtonRemove onClick={() => removeFromPokedex(details)}>
                Excluir!
              </ButtonRemove>
            )}
          </StyleHeader>
        );
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
