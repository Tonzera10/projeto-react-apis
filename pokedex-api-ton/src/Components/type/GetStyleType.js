import styled from "styled-components";

export const StyleTextClass = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
`
export const StyleClass = styled.div`
    display: flex;
    gap: 7px;
`
export const ClassFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    border-radius: 8px;
    border: dashed 1px white;
    color: white;
    width: 99px;
    height: 31px;
    background: ${(props) => props.color};
`
export const StyleImgClass = styled.img`
    width: 20px;
    height: 20px;
`