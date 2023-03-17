import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleHeader = styled.header`
    width: ${px2vw(1440)};
    height: ${px2vw(160)};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`

export const StyleImg = styled.img`
    width: ${px2vw(307)};
    height: ${px2vw(113)};
    grid-column: 2;
    margin-left: ${px2vw(100)};
`

export const StyleButton = styled.button`
    background-color: #33A4F5;
    color: white;
    width: ${px2vw(287)};
    height: ${px2vw(74)};
    border-radius: ${px2vw(8)};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(16)};
    grid-column: 3;
    margin-left: ${px2vw(100)};
`
export const ButtonCaptur = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: ${px2vw(16)};
    width: ${px2vw(226)};
    height: ${px2vw(57)};
    border-radius: ${px2vw(8)};
    border: none;
    z-index: 2;
    background-color: #33A4F5;
    color: white;
    margin-left: ${px2vw(200)};
`
export const ButtonRemove = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: ${px2vw(16)};
    width: ${px2vw(226)};
    height: ${px2vw(57)};
    border-radius: ${px2vw(8)};
    border: none;
    background-color: #FF6262;
    color: white;
    z-index: 2;
    margin-left: ${px2vw(200)};
`
export const ButtonBackAll = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: ${px2vw(24)};
    width: ${px2vw(210)};
    height: ${px2vw(36)};
    border-radius: ${px2vw(8)};
    border: none;
    text-decoration-line: underline;
    background-color: white;
    animation: todosPoke 0.5s;
    @keyframes todosPoke {
        from{            
            transform: translateY(50px);
            scale: 2;
        }
        to{            
            transform: scale(1);
            top: 0;
            
        }
    }
`
export const StyleBackAll = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${px2vw(80)};
`
export const StyleSeta = styled.img`
    width: ${px2vw(7.29)};
    height: ${px2vw(14.58)};
`