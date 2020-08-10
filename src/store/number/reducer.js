import * as Actions from './actionTypes';

const initialState = {
    number : 0,
    laoding: false,
    error: null,
    names: []
}

export const incrementReducer = (state = initialState, action)=>{

    switch(action.type){
        case Actions.INCREMENT:
            return  {
                ...state,
                number: action.payload
        };
        
        case Actions.FETCH_DATA:
            return {
                ...state,
                laoding: true
            };
        
        case Actions.SUCCESS_DATA:
            return {
                ...state,
                names: action.payload,
                loading: false
            };
        case Actions.FAILED_DATA:
            return{
                ...state,
                loading: false,
                error: action.payload
            }    
        default: return state;
    }

}