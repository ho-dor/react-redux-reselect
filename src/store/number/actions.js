import * as Actions from './actionTypes';

//actions
// const increment = {
//     type: Actions.INCREMENT
// }

//action-creator

export const increment = (add)=>({
    type: Actions.INCREMENT,
    payload: add
})

export const getData = () => {
    return dispatch =>{
        dispatch({type: Actions.FETCH_DATA})
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => dispatch({type: Actions.SUCCESS_DATA, payload: data}))
        .catch(err => dispatch({type: Actions.FAILED_DATA, payload: err}))
    }
}