import loading from "../../assets/pikachu.webp"
import { StyleImg, StyleLoading } from "./StyleLoading";

function Loading() {
    return(
        <StyleLoading>
            <StyleImg src={loading}/>
        </StyleLoading>
    )
}

export default Loading;