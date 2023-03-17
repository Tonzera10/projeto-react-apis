import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const AlertMain = styled.div`
    width: ${px2vw(1440)};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    background-color: rgb(0, 0, 0, 0.5);
`
export const AlertStyle = styled.div`
    width: ${px2vw(451)};
    height: ${px2vw(222)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black ;
    border-radius: ${px2vw(12)};
    background-color: white;
    z-index: 999;
`
export const TitleStyle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: ${px2vw(48)};
`
export const DescriptionStyle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(16)};
`