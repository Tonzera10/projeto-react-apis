import styled from "styled-components";

export const StyleCard = styled.div`
    width: 440px;
    height: 210px;
    border-radius: 12px;
    display: flex;
    border: solid 1px black;
    flex-direction: column;
    background-color: ${(props) => props.color};
    padding-left: 23px;
    padding-top: 25px;
    gap: 34px;
`
export const StyleCardFull = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export const StyleClass = styled.div`
    display: flex;
    gap: 7px;
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


export const StyleImgClass = styled.img`
    width: 20px;
    height: 20px;
`


export const ButtonCaptur = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
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
`

export const StyleDiv = styled.div`
    height: 4vh;
` 
