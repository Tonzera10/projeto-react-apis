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
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/cordinator";

function PokemonCard({pokeCard, color, key}) {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, findPokemon, inDetails } =
    context;
  const navigate = useNavigate();
  
  const renderPokeCardList = () => {
  
      return (
        <StyleCardFull key={key}>
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
              {findPokemon ? (
                <ButtonCaptur onClick={() => addToPokedex(pokeCard)}>
                  Capturar!
                </ButtonCaptur>
              ) : (
                <ButtonRemove onClick={() => removeFromPokedex(pokeCard)}>
                  Remover!
                </ButtonRemove>
              )}
            </DetailAndCaptur>
          </StyleCard>
        </StyleCardFull>
      );
  };

  return <>{renderPokeCardList()}</>;
}

export default PokemonCard;
