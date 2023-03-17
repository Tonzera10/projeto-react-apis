import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleCardFull = styled.div`
   display: flex;
   flex-wrap: wrap;
   z-index: 1;
`
export const StyleCardDetails = styled.div`
    width: ${px2vw(1389)};
    height: ${px2vw(663)};
    border-radius: ${px2vw(37)};
    display: flex;
    border: solid 1px black;
    background-color: ${(props) => props.color};
    padding-left: ${px2vw(23)};
    padding-top: ${px2vw(25)};
    gap: ${px2vw(34)};
    
`
export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${px2vw(47)};
`
export const ImgDetails = styled.img`
    background-color: white;
    border-radius: ${px2vw(8)};
    width: ${px2vw(282)};
    height: ${px2vw(282)};
`
export const StyleStats = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: ${px2vw(343)};
    height: ${px2vw(613)};
    padding: ${px2vw(20)};
    gap: ${px2vw(10)};
    border-radius: ${px2vw(8)};
` 
export const StatsBar = styled.div`
    width: ${px2vw(307)};
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
    border-top: 1px solid rgb(0, 0, 0, 0.1);
    padding-top: ${px2vw(10)};
`
export const Atributes = styled.p`
font-family: 'Poppins', sans-serif;
font-size: ${px2vw(16)};
font-weight: 400;
line-height: ${px2vw(14)};
text-transform: capitalize;
`
export const AtributesValue = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: ${px2vw(16)};
    font-weight: 400;
    line-height: ${px2vw(19)};
    text-align: center;
    margin-left: ${px2vw(20)};
`
export const StylePrograss = styled.div`
    display: flex;
    flex-direction: column;
    width: ${px2vw(200)};
    padding-left: ${px2vw(20)};
`
export const ProgressBar = styled.div`
    --progress: ${(props) => props.value};
    height: ${px2vw(10)};
    padding: ${px2vw(5)};
    display: flex;
    width: calc(var(--progress) * 1%);
    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
    border-radius: ${px2vw(8)};
`
export const StyleDiv = styled.div`
    height: ${px2vw(86)};
    z-index: 1;
` 
export const StyleId = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(16)};
    color: white;
`
export const StyleName = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(32)};
    color: white;
    text-transform: capitalize;
`
export const ImgPokemon = styled.img`
    width: ${px2vw(193)};
    min-height: ${px2vw(193)};
    position: relative;
    bottom: ${px2vw(210)};
    left: ${px2vw(440)};
    z-index: 9;
    animation: imgMain 0.5s linear;
    @keyframes imgMain {
        from{
            opacity: 0;
            left: 0;
        }
        to{
            opacity: 1;
            left: 20; 
        }
    }
`
export const StyleClass = styled.div`
    display: flex;
    gap: ${px2vw(7)};
    margin-top: ${px2vw(10)};
    z-index: 1;
`

export const DetailAndCaptur = styled.div`
    display: flex;
    gap: ${px2vw(175)};
    align-items: center;

`
export const StyleDetailsPokemons = styled.div`
    display: flex;
    flex-direction: column;
`
export const PokeDetails = styled.img`
    width: ${px2vw(788)};
    position: relative;
    bottom: ${px2vw(770)};
    right: ${px2vw(110)};
`

export const StyleMoves = styled.div`
    display: flex;
    flex-direction: column;
    width: ${px2vw(292)};
    min-height: ${px2vw(453)};
    background-color: white;
    position: relative;
    bottom: ${px2vw(135)};
    border-radius: ${px2vw(8)};
    padding: ${px2vw(18)};
    gap: ${px2vw(20)};
    z-index: 1;
`
export const Moves = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: ${px2vw(14)};
    font-weight: 400;
    line-height: ${px2vw(14)};
    text-transform: capitalize;
    padding: ${px2vw(10)};
    background-color: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: ${px2vw(12)};
    width: ${px2vw(150)};
`

export const TextStatsAndMoves = styled.p`
    font-size: ${px2vw(24)};
    font-weight: 800;
    font-family: 'Inter', sans-serif;
`
export const TotalStyle = styled.div`
    display: flex;
    gap: ${px2vw(40)};
    border-top: 1px solid rgb(0, 0, 0, 0.1);
    padding-top: ${px2vw(10)};
`

export const Total = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: ${px2vw(16)};
    font-weight: 400;
    line-height: ${px2vw(14)};
`
export const TotalValue = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: ${px2vw(16)};
    font-weight: 400;
    line-height: ${px2vw(19)};
`