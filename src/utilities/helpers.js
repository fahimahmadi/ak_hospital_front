
/* read data from localStorage */
export function getDataFromLS (propName) {
    const state = JSON.parse(localStorage.getItem('state'));

    if(state.hasOwnProperty(propName)){
        return state[propName]
    }else {
        return undefined
    }
}