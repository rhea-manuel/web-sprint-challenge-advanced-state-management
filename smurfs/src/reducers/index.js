import Axios from "axios";
import { ADD_SMURF, CHANGE_VALUE, FETCH_DATA, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    form: {
        name: '',
        age: '',
        height: ''
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
            // console.log(action.payload)
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value
                }
            }

        case ADD_SMURF:
            Axios.post('http://localhost:3333/smurfs/', state.form)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))

        default:
            console.log("Default")
            return state
    }
}