import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleTextClass = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: ${px2vw(14)};
`
export const StyleClass = styled.div`
    display: flex;
    gap: ${px2vw(7)};
`
export const ClassFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${px2vw(17)};
    border-radius: ${px2vw(8)};
    border: dashed 1px white;
    color: white;
    width: ${px2vw(99)};
    height: ${px2vw(31)};
    background: ${(props) => props.color};
`
export const StyleImgClass = styled.img`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
`