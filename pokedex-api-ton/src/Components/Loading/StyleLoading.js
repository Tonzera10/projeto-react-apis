import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StyleImg = styled.img`
    width: ${px2vw(300)};
`

export const StyleLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`