import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleCardFull = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export const StyleCard = styled.div`
    width: ${px2vw(440)};
    height: ${px2vw(210)};
    border-radius: ${px2vw(12)};
    display: flex;
    border: solid 1px black;
    flex-direction: column;
    background-color: ${(props) => props.color};
    padding-left: ${px2vw(23)};
    padding-top: ${px2vw(25)};
    gap: ${px2vw(34)};
`
export const StyleDiv = styled.div`
    height: ${px2vw(29)};
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
    height: ${px2vw(193)};
    position: relative;
    top: ${px2vw(-135)};
    left: ${px2vw(210)};
    z-index: 2;
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
export const ImgPokebola = styled.img`
    width: ${px2vw(245.73)};
    height: ${px2vw(210.73)};
    position: relative;  
    top : ${px2vw(-280)};
    left: ${px2vw(170)};
    z-index: 1;
    
`
export const StyleClass = styled.div`
    display: flex;
    gap: ${px2vw(7)};
`
export const DetailAndCaptur = styled.div`
    display: flex;
    gap: ${px2vw(175)};
    align-items: center;

`
export const StyleDetail = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(16)};
    text-decoration-line: underline;
`
export const ButtonRemove = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: ${px2vw(16)};
    width: ${px2vw(146)};
    height: ${px2vw(38)};
    border-radius: ${px2vw(8)};
    border: none;
    background-color: #FF6262;
    color: white;
    z-index: 2;
`