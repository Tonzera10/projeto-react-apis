import { useNavigate } from 'react-router-dom';
import pokemonHeader from '../../assets/PokemonHeader.png'
import { goToPokedex } from '../../router/cordinator';
import { StyleButton, StyleHeader, StyleImg } from './HeaderStyle';

function Header(){
 const navigate = useNavigate()

    return(
        <StyleHeader>
            <StyleImg src={pokemonHeader}/>
            <StyleButton onClick={()=>goToPokedex(navigate)}>Pokedex</StyleButton>
        </StyleHeader>
    )
}

export default Header;