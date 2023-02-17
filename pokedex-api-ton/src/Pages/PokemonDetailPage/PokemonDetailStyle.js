import styled from "styled-components";

export const StyleList = styled.div`
    background-color: #5E5E5E;
    min-height: 100vh;
    width: 100vw;
    padding-left: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 20px;
    z-index: 1;
`
export const StyleH1 = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    padding: 50px 0;
    width: 100vw;
    animation: myPoke 0.5s;
    @keyframes myPoke {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`
export const ImgPokebola = styled.img`
    position: absolute;
    z-index: 0;
    left: 300px;
    opacity: 0.5;
`