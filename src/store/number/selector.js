import {createSelector} from 'reselect'

export const getNumbers = (state)=>{
    return state.number.number
}

export const getNames = (state)=>{
    return state.number.names
}

export const getNumber = createSelector([getNumbers],(getNumbers)=>{
    return getNumbers;
})

export const getName = createSelector([getNames],(getNames)=>{
    return getNames.map(i=>i.name)
})