import styled from "styled-components";

export const StyleList = styled.div`
    background-color: #5E5E5E;
    width: 100vw;
    padding-left: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 20px;
    padding-bottom: 40px;
`
export const StyleH1 = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    padding: 40px 0;
    width: 100vw;
    animation: pokeList 0.5s;
    @keyframes pokeList {
        from{
            transform: translateY(-50px);
            color: black;
            text-decoration: underline;
            scale: 0.5;
        }
        to{
            transform: scale(1);
            top: 0;
            color: white;
        }
    }
`
