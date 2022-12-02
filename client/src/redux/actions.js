import axios from "axios"

/////-----DESDE EL BACK-----/////
export function getAllVideogames() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/videogames")
        return dispatch({
            type: "GET_ALL_VIDEOGAMES",
            payload: json.data
        })
    }
}

export function getVideogameByName(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/videogames?name=` + name);
            return dispatch({
                type: 'GET_VIDEOGAMES_BY_NAME',
                payload: json.data  //es lo q devuelve la ruta una vez q le asigno algo por name
            })
        } catch (error) {
            alert('Game not found 😕');
        }
    }
}

export function getAllGenres() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/genres');
        return dispatch({
            type: 'GET_ALL_GENRES',
            payload: json.data
        })
    }
};

export function getAllPlatforms() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/platforms');
        return dispatch({
            type: 'GET_ALL_PLATFORMS',
            payload: json.data
        })
    }
};

export function videogamesDetail(id) {
    return async function (dispatch) {
        const json = await axios.get(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: "DETAIL_VIDEOGAMES",
            payload: json.data
        })
    }
}

export function postVideogame(payload) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/videogames/create", payload)
        return response
    }
}

/////-----FILTROS-----/////
export function filterByCreation(payload) {
    return {
        type: "FILTER_CREATION",
        payload
    }
}

export function orderByName(payload) {
    return {
        type: "ORDER_NAME",
        payload
    }
}

export function orderByRating(payload) {
    return {
        type: "ORDER_RATING",
        payload
    }
}

export function filterByGenre(payload) { //el payload es el value del input
    return {
        type: 'FILTER_BY_GENRE',
        payload
    }
}

