import styled from "styled-components";

export const AlertMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    background-color: rgb(0, 0, 0, 0.5);
`
export const AlertStyle = styled.div`
    width: 451px;
    height: 222px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black ;
    border-radius: 12px;
    background-color: white;
    z-index: 999;
`
export const TitleStyle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 48px;
`
export const DescriptionStyle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 16px;
`