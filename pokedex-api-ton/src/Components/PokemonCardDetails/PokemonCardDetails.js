import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import GetType from "../type/GetType";
import pokebola from "../../assets/pokebolaFundo.png";
import { goToDetails } from "../../router/cordinator";
import { Atributes, AtributesValue, ButtonCaptur, ButtonRemove, DetailAndCaptur, DivImg, ImgDetails, ImgPokebola, ImgPokemon, ProgressBar, StatsBar, StyleCardDetails, StyleCardFull, StyleClass, StyleDetail, StyleDiv, StyleId, StyleName, StylePrograss, StyleStats } from "./PokemonCardDetailsStyle";


function PokemonCardDetails() {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, findPokemon, details, getDetails } = context;
  const navigate = useNavigate();
  const {id} = useParams()

  let color = "";
  switch (details?.types?.length && details.types[0].type?.name) {
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

  useEffect(() => {
    getDetails(id)
  }, [])

  return (
    <StyleCardFull key={details?.id}>
      <StyleCardDetails color={color}>
        <DivImg>
          <ImgDetails src={details?.sprites?.front_default} />
          <ImgDetails src={details?.sprites?.back_default} />
        </DivImg>
        <StyleStats>
          <p>Base stats</p>
          {details?.stats?.length && details.stats.map((pokemon, index) => {
            return (
              <StatsBar key={index}>
                <Atributes>{pokemon.stat.name}</Atributes>
                <AtributesValue>{pokemon.base_stat}</AtributesValue>
                <StylePrograss>
                  <ProgressBar value={pokemon.base_stat}></ProgressBar>
                </StylePrograss>
              </StatsBar>
            );
          })}
        </StyleStats>
        <StyleDiv>
          <StyleId>#{details?.id}</StyleId>
          <StyleName>{details?.name}</StyleName>
          <ImgPokemon
            src={details?.sprites?.other?.length && details.sprits.other["official-artwork"].front_default}
          />
          <ImgPokebola src={pokebola} />
        </StyleDiv>
        <StyleClass>
          <GetType pokeCard={details} />
        </StyleClass>
        <DetailAndCaptur>
          
          
        </DetailAndCaptur>
      </StyleCardDetails>
    </StyleCardFull>
  );
}

export default PokemonCardDetails;
