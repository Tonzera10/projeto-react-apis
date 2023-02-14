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
    gap: 10px;
    border-radius: 8px;
` 
export const StatsBar = styled.div`
    width: 307px;
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
`
export const Atributes = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 12px;
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
    height: 4vh;
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
    height: 193px;
    position: relative;
    top: -135px;
    left: 210px;
    z-index: 2;
    
`
export const ImgPokebola = styled.img`
    width: 245.73px;
    height: 210.73px;
    position: relative;  
    top : -280px;
    left: 170px;
    z-index: 1;
    
`
export const StyleClass = styled.div`
    display: flex;
    gap: 7px;
`

export const DetailAndCaptur = styled.div`
    display: flex;
    gap: 175px;
    align-items: center;

`
export const StyleDetail = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: underline;
` 
export const ButtonCaptur = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
    z-index: 2;
`
export const ButtonRemove = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
    background-color: red;
    color: white;
    z-index: 2;
`

