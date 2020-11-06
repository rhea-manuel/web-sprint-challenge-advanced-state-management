import { CHANGE_VALUE, FETCH_DATA, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    form: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
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

        case CHANGE_VALUE:
            console.log(action.payload)
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value
                }
            }

        default:
            console.log("Default")
            return state
    }
}