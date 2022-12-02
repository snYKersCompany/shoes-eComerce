const initialState = {
    videogames: [],
    allVideogames: [],
    allGenres: [],
    allPlatforms: [],
    detail: {},
    platform: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        /////-----GET AL BACK-----/////
        case "GET_ALL_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case "GET_VIDEOGAMES_BY_NAME":
            return {
                ...state,
                videogames: action.payload
            }
        case 'GET_ALL_GENRES':
            return {
                ...state,
                allGenres: action.payload
            }
        case "GET_ALL_PLATFORMS":
            return {
                ...state,
                allPlatforms: action.payload
            }
        case "DETAIL_VIDEOGAMES": {
            return {
                ...state,
                detail: action.payload
            }
        }
        case "POST_VIDEOGAME":
            return { ...state }
        /////-----FILTROS-----/////
        case 'ORDER_NAME':
            let sortName = action.payload === 'ascAlph' ?
                state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
                : state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : sortName,
            };
        case "ORDER_RATING":
            let sortRating = action.payload === 'ascRat' ?
                state.videogames.sort(function (a, b) {
                    if (Number(a.rating) > Number(b.rating)) {
                        return -1;
                    }
                    if (Number(b.rating) > Number(a.rating)) {
                        return 1;
                    }
                    return 0;
                })
                : state.videogames.sort(function (a, b) {
                    if (Number(a.rating) > Number(b.rating)) {
                        return 1;
                    }
                    if (Number(b.rating) > Number(a.rating)) {
                        return -1;
                    }
                    return 0;
                });
            return {
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : sortRating,
            }
        case "FILTER_CREATION":
            const allVideogames = state.allVideogames
            const filterCreation = action.payload === "uploaded" ? allVideogames.filter(el => el.id.length > 5) : allVideogames.filter(el => el.id.toString().length <= 5)
            return {
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : filterCreation
            }
        case 'FILTER_BY_GENRE':
            const allGames = state.allVideogames; //aca tb para el filtro desde todos
            const genresFilter = action.payload === 'all' ? allGames : allGames.filter(el => el.genres.includes(action.payload))
            return {
                ...state,
                videogames: genresFilter
            }
        case "FILTER_THREE_GENRES":
            const allgames = state.allVideogames
            const threeGenres = allgames.filter(el => el.genres.length >= 3)
            return {
                ...state,
                videogames: threeGenres
            }
        default: return state
    }
}

export default rootReducer