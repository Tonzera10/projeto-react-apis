import styled from "styled-components";

export const StyleHeader = styled.header`
    width: auto;
    height: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`

export const StyleImg = styled.img`
    width: 307px;
    height: 113px;
    grid-column: 2;
    margin-left: 100px;
`

export const StyleButton = styled.button`
    background-color: #33A4F5;
    color: white;
    width: 287px;
    height: 74px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    grid-column: 3;
    margin-left: 200px;
`
export const ButtonCaptur = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
    z-index: 2;
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
    z-index: 2;
`
export const ButtonBackAll = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    width: 210px;
    height: 36px;
    border-radius: 8px;
    border: none;
    text-decoration-line: underline;
    background-color: white;
`
export const StyleBackAll = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;
`
export const StyleSeta = styled.img`
    width: 7.29px;
    height: 14.58px;
`