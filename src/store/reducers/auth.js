export const INITIAL_STATE =
{
    authorized: false,
    user: undefined,
    err: undefined,
    initialDate: undefined,
    finalDate: undefined,
    data: undefined
}

export default function auth(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_AUTH') {
        return {
            ...state,
            authorized: action.auth,
            user: action.user,
            err: action.err
        }
    }
    if (action.type === 'LOGOUT_AUTH') {
        return {
            ...state,
            authorized: false,
            user: null,
        }
    }
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: action.err
        }
    }
    if (action.type === 'INITIAL_DATE') {
        return {
            ...state,
            initialDate: action.initialDate
        }
    }
    if (action.type === 'FINAL_DATE') {
        return {
            ...state,
            finalDate: action.finalDate
        }
    }
    if (action.type === 'TOGGLE_DATA') {
        return {
            ...state,
            data: action.data
        }
    }

    return state
}