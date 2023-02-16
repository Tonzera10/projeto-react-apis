import styled from "styled-components";

export const StyleCardFull = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export const StyleCardDetails = styled.div`
    width: 1389px;
    height: 663px;
    border-radius: 37px;
    display: flex;
    border: solid 1px black;
    background-color: ${(props) => props.color};
    padding-left: 23px;
    padding-top: 25px;
    gap: 34px;
    
`
export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 47px;
`
export const ImgDetails = styled.img`
    background-color: white;
    border-radius: 8px;
    width: 282px;
    height: 282px;
`
export const StyleStats = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 343px;
    height: 613px;
    padding: 20px;
    gap: 20px;
    border-radius: 8px;
` 
export const StatsBar = styled.div`
    width: 307px;
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
`
export const Atributes = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 14px;
text-transform: capitalize;
`
export const AtributesValue = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    margin-left: 20px;
`
export const StylePrograss = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding-left: 20px;
`
export const ProgressBar = styled.div`
    --progress: ${(props) => props.value};
    height: 10px;
    padding: 5px;
    display: flex;
    width: calc(var(--progress) * 1%);
    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
`
export const StyleDiv = styled.div`
    height: 12vh;
    z-index: 1;
` 
export const StyleId = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: white;
`
export const StyleName = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: white;
    text-transform: capitalize;
`
export const ImgPokemon = styled.img`
    width: 193px;
    min-height: 193px;
    position: relative;
    bottom: 210px;
    left: 440px;
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
    gap: 7px;
    margin-top: 10px;
    z-index: 1;
`

export const DetailAndCaptur = styled.div`
    display: flex;
    gap: 175px;
    align-items: center;

`
export const StyleDetailsPokemons = styled.div`
    display: flex;
    flex-direction: column;
`
export const PokeDetails = styled.img`
    position: relative;
    bottom: 770px;
    right: 110px;
`

export const StyleMoves = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
    min-height: 453px;
    background-color: white;
    position: relative;
    bottom: 135px;
    border-radius: 8px;
    padding: 18px;
    gap: 20px;
    z-index: 1;
`
export const Moves = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: capitalize;
    padding: 10px;
    background-color: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    width: 150px;
`

export const TextStatsAndMoves = styled.p`
    font-size: 24px;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
`
