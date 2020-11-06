import Axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"

export const getData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    Axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}