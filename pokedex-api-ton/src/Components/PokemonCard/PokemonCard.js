import {
  ButtonCaptur,
  ButtonRemove,
  DetailAndCaptur,
  ImgPokebola,
  ImgPokemon,
  StyleCard,
  StyleCardFull,
  StyleClass,
  StyleDetail,
  StyleDiv,
  StyleId,
  StyleName,
} from "./PokemonCardStyle";
import pokebola from "../../assets/pokebolaFundo.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import GetType from "../type/GetType";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/cordinator";

function PokemonCard({ pokeCard, color }) {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, findPokemon } = context;
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
    {location.pathname === "/" || "/pokedex" ?
      <StyleCardFull key={pokeCard.id}>
        <StyleCard color={color}>
          <StyleDiv>
            <StyleId>#{pokeCard.id}</StyleId>
            <StyleName>{pokeCard.name}</StyleName>
            <ImgPokemon
              src={pokeCard.sprites.other["official-artwork"].front_default}
            />
            <ImgPokebola src={pokebola} />
          </StyleDiv>
          <StyleClass>
            <GetType pokeCard={pokeCard} />
          </StyleClass>
          <DetailAndCaptur>
            <StyleDetail onClick={() => goToDetails(navigate, pokeCard.id)}>Detalhes</StyleDetail>
            {findPokemon ? (
              <ButtonCaptur onClick={() => addToPokedex(pokeCard)}>
                Capturar!
              </ButtonCaptur>
            ) : (
              <ButtonRemove onClick={() => removeFromPokedex(pokeCard)}>
                Excluir!
              </ButtonRemove>
            )}
          </DetailAndCaptur>
        </StyleCard>
      </StyleCardFull>
      :
      <h1>eae galera estamos no detalhes</h1>
    }
    </>
  );
}

export default PokemonCard;
