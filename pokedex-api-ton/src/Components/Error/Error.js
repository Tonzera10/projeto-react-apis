import error from "../../assets/Error.webp"
import { StyleError, StyleImg } from "./ErrorStyle";

function Error() {
    return(
        <StyleError>
            <StyleImg src={error}/>
        </StyleError>
    )
}

export default Error;