import Axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"

export const ADD_SMURF = "ADD_SMURF"
export const CHANGE_VALUE = "CHANGE_VALUE"

export const getData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    Axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export function changeValue({ name, value }) {
    // console.log('changeVal', value)
    return {
        type: CHANGE_VALUE,
        payload: { name, value }
    }
}

export function addSmurf(formData) {
    console.log('action', formData)
    return {
        type: ADD_SMURF,
        payload: formData
    }

}