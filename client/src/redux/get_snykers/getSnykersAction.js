import axios from 'axios';
import { getAllSnykers } from '../get_snykers/snykersSlice';

export const getallShoes = () =>
    async (dispatch) => {
        try {
            const response = await axios('a la ruta que mapea el JSON y lo trae')
            return dispatch(getAllSnykers(response.data))
        }
        catch (e) {
            alert(`problem: ${e}`)
        }
    }