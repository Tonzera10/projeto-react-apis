import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleList = styled.div`
    background-color: #5E5E5E;
    min-height: 100%;
    width: ${px2vw(1440)};
    padding-left: ${px2vw(40)};
    display: flex;
    flex-wrap: wrap;
    gap: ${px2vw(50)} ${px2vw(20)};
    padding-bottom: ${px2vw(40)};
`
export const StyleTitle = styled.h1`
    color: white;
    font-size: ${px2vw(48)};
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    padding: ${px2vw(50)} 0;
    width: ${px2vw(1440)};
    height: ${px2vw(172)};
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