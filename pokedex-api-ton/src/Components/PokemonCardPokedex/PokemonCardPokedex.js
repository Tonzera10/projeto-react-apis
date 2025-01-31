import pokebola from "../../assets/pokebolaFundo.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import GetType from "../type/GetType";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/cordinator";
import {
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
} from "./PokemonCardPokedexStyle";

function PokemonCardPokedex({pokeCard, color}) {
  const context = useContext(GlobalContext);
  const { removeFromPokedex, inDetails } = context;
  const navigate = useNavigate();

  const renderCardPokedex = () => {
    
      return (
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
              <StyleDetail
                onClick={() => {
                  goToDetails(navigate, pokeCard.id);
                  inDetails(pokeCard);
                }}
              >
                Detalhes
              </StyleDetail>
              <ButtonRemove onClick={() => removeFromPokedex(pokeCard)}>
                Remover!
              </ButtonRemove>
            </DetailAndCaptur>
          </StyleCard>
        </StyleCardFull>
      );
  };
  return <>{renderCardPokedex()}</>;
}

export default PokemonCardPokedex;
