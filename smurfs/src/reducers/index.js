import { FETCH_DATA, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }

        default:
            console.log("Default")
            return state
    }
}