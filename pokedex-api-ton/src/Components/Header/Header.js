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
  const { addToPokedex, removeFromPokedex, details, pokedex } = context;
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
            {pokedex.find((pokemon) => pokemon.id === details.id) === undefined ? (
              <ButtonCaptur onClick={() => addToPokedex(details)}>
                Adicionar na Pokédex
              </ButtonCaptur>
            ) : (
              <ButtonRemove onClick={() => removeFromPokedex(details)}>
                Remover da Pokédex
              </ButtonRemove>
            )}
          </StyleHeader>
        );
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
