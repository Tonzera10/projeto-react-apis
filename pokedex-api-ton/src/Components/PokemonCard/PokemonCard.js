import {
  ButtonCaptur,
  ClassFirst,
  ClassSecond,
  DetailAndCaptur,
  ImgPokebola,
  ImgPokemon,
  StyleCard,
  StyleCardFull,
  StyleClass,
  StyleDetail,
  StyleDiv,
  StyleId,
  StyleImgClass,
  StyleName,
  StyleTextClass,
  Teste,
} from "./PokemonCardStyle";
import imagem from "../../assets/image 3.png";
import pokebola from "../../assets/pokebolaFundo.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonCard({ pokeCard }) {
  return (
    <>
      <StyleCardFull key={pokeCard.id}>
        <StyleCard>
          <StyleDiv>
            <StyleId>#01</StyleId>
            <StyleName>{pokeCard.name}</StyleName>
            <ImgPokemon
              src={pokeCard.sprites.other["official-artwork"].front_default}
            />
            <ImgPokebola src={pokebola} />
          </StyleDiv>
          <StyleClass>
            {pokeCard.types?.length > 1 ? (
              <>
                <ClassFirst>
                  <StyleImgClass />
                  <StyleTextClass>{pokeCard.types[0].type.name}</StyleTextClass>
                </ClassFirst>
                <ClassSecond>
                  <StyleImgClass />
                  <StyleTextClass>Poison</StyleTextClass>
                </ClassSecond>
              </>
            ) : (
              <ClassFirst>
                <StyleImgClass />
                <StyleTextClass>{pokeCard.types[0].type.name}</StyleTextClass>
              </ClassFirst>
            )}
          </StyleClass>
          <DetailAndCaptur>
            <StyleDetail>Detalhes</StyleDetail>
            <ButtonCaptur>Capturar!</ButtonCaptur>
          </DetailAndCaptur>
        </StyleCard>
      </StyleCardFull>
    </>
  );
}

export default PokemonCard;
