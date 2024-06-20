import { createContext, useEffect, useReducer } from "react";



// create context
export const context = createContext(null);

// initial state
export const initial_state = {
    token: '',
    user: null,
}

// reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.token,
                user: action.user
            }

    
        default:
            break;
    }
}


// initializer function
function initializer (initial){
    const persisted_state = localStorage.getItem('state');
    return persisted_state ? JSON.parse(persisted_state) : initial;
}


// contextProvider
export function ContextProvider({children}) {

    // define usereducer
    const [state, dispatch] = useReducer(reducer, initial_state, initializer)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    });

  return (
    <context.Provider value={{state, dispatch}}>
        {children}
    </context.Provider>
  )
}
