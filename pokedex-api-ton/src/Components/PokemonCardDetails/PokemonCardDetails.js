import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import GetType from "../type/GetType";
import {
  Atributes,
  AtributesValue,
  DetailAndCaptur,
  DivImg,
  ImgDetails,
  ImgPokemon,
  Moves,
  PokeDetails,
  ProgressBar,
  StatsBar,
  StyleCardDetails,
  StyleCardFull,
  StyleClass,
  StyleDetailsPokemons,
  StyleDiv,
  StyleId,
  StyleMoves,
  StyleName,
  StylePrograss,
  StyleStats,
  TextStatsAndMoves,
} from "./PokemonCardDetailsStyle";
import pokeDetails from "../../assets/pokebolaDetails.png"

function PokemonCardDetails() {
  const context = useContext(GlobalContext);
  const { details, getDetails } =
    context;
  const { id } = useParams();

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
    getDetails(id);
  }, []);

  return (
    <StyleCardFull key={details?.id}>
      <StyleCardDetails color={color}>
        <DivImg>
          <ImgDetails src={details?.sprites?.front_default} />
          <ImgDetails src={details?.sprites?.back_default} />
        </DivImg>
        <StyleStats>
          <TextStatsAndMoves>Base stats</TextStatsAndMoves>
          {details?.stats?.length &&
            details.stats.map((pokemon, index) => {
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
        <StyleDetailsPokemons>
          <StyleDiv>
            <StyleId>#{details?.id}</StyleId>
            <StyleName>{details?.name}</StyleName>
          </StyleDiv>
          <StyleClass>
            <GetType pokeCard={details} />
          </StyleClass>
          <ImgPokemon
            src={details?.sprits?.other?.length && details?.sprits?.other["official-artwork"].front_default}
          />
          <StyleMoves>
            <TextStatsAndMoves>Moves:</TextStatsAndMoves>
            {details?.moves?.length && details?.moves?.map((pokemon, index) => {
              return(
                index < 5 &&
                <Moves>{pokemon.move.name}</Moves>
                )
                
              })}

          </StyleMoves>
            <PokeDetails src={pokeDetails}/>
        </StyleDetailsPokemons>
        <DetailAndCaptur></DetailAndCaptur>
      </StyleCardDetails>
    </StyleCardFull>
  );
}

export default PokemonCardDetails;
