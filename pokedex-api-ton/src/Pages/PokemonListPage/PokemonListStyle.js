import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const StyleList = styled.div`
    background-color: #5E5E5E;
    width: ${px2vw(1440)};
    padding-left: ${px2vw(40)};
    display: flex;
    flex-wrap: wrap;
    gap: ${px2vw(50)} ${px2vw(20)};
    padding-bottom: ${px2vw(40)};
`
export const StyleH1 = styled.h1`
    color: white;
    font-size: ${px2vw(48)};
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    padding: ${px2vw(40)} 0;
    animation: pokeList 0.5s;
    @keyframes pokeList {
        from{
            transform: translateY(${px2vw(-300)});
            color: black;
            text-decoration: underline;
            scale: 0.5;
            left: 0;
        }
        to{
            transform: scale(1);
            top: 0;
            color: white;
        }
    }
`
export const StileTitle = styled.div`
    width: ${px2vw(1440)};
`
