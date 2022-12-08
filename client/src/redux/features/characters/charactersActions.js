import axios from "axios";
import { getAllCharacters } from "../characters/characterSlice";

// esta son los acciones normalitas de redux
export const getChars = () => (dispatch) => {
    axios("https://rickandmortyapi.com/api/character")
        .then(res => dispatch(getAllCharacters(res.data.results)))
        .catch(error => console.log(error))
}
