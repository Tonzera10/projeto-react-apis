import {
  ButtonCaptur,
  ButtonRemove,
  DetailAndCaptur,
  ImgPokebola,
  ImgPokemon,
  StyleCard,
  StyleCardDetails,
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
  const { addToPokedex, removeFromPokedex, findPokemon, inDetails } = context;
  const location = useLocation();
  const navigate = useNavigate();

  const renderPokeCard = () => {
    switch (location.pathname) {
      case "/":
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
                <StyleDetail onClick={() => {goToDetails(navigate, pokeCard.id); inDetails(pokeCard)}}>
                  Detalhes
                </StyleDetail>
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
        );
      case "/pokedex":
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
                <StyleDetail onClick={() => {goToDetails(navigate, pokeCard.id); inDetails(pokeCard)}}>
                  Detalhes
                </StyleDetail>
                <ButtonRemove onClick={() => removeFromPokedex(pokeCard)}>
                  Excluir!
                </ButtonRemove>
              </DetailAndCaptur>
            </StyleCard>
          </StyleCardFull>
        );
      default:
        return(
          <StyleCardFull key={pokeCard.id}>
          <StyleCardDetails color={color}>
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
              <StyleDetail onClick={() => goToDetails(navigate, pokeCard.id)}>
                Detalhes
              </StyleDetail>
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
          </StyleCardDetails>
        </StyleCardFull>
        )
    }
  };

  return (
    <>
      {renderPokeCard()}
    </>
  );
}

export default PokemonCard;
