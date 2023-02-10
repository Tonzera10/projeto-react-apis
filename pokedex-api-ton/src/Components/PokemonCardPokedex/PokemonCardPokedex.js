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

function PokemonCardPokedex() {
  const context = useContext(GlobalContext);
  const { removeFromPokedex, inDetails, pokedex } = context;
  const navigate = useNavigate();

  const renderCardPokedex = () => {
    pokedex.map((pokeCard) => {
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
    });
  };
  return <>{renderCardPokedex()}</>;
}

export default PokemonCardPokedex;
