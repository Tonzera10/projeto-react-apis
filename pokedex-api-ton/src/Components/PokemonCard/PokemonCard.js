import {
  ButtonCaptur,
  DetailAndCaptur,
  ImgPokebola,
  ImgPokemon,
  StyleCard,
  StyleCardFull,
  StyleClass,
  StyleDetail,
  StyleDiv,
  StyleId,
  StyleName
} from "./PokemonCardStyle";
import pokebola from "../../assets/pokebolaFundo.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import GetType from "../type/GetType";

function PokemonCard({ pokeCard }) {
    const context = useContext(GlobalContext)
    const {addToPokedex} = context
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
            <GetType pokeCard={pokeCard}/>
          </StyleClass>
          <DetailAndCaptur>
            <StyleDetail>Detalhes</StyleDetail>
            <ButtonCaptur onClick={()=>addToPokedex()}>Capturar!</ButtonCaptur>
          </DetailAndCaptur>
        </StyleCard>
      </StyleCardFull>
    </>
  );
}

export default PokemonCard;
