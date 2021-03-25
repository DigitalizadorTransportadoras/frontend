export function toggleAuth(auth, user, err) {
    return {
        type: 'TOGGLE_AUTH',
        auth,
        user,
        err
    }
}

export function logoutAuth() {
    return {
        type: 'LOGOUT_AUTH'
    }
}

export function errorDispatch(err) {
    return {
        type: 'ERROR',
        err
    }
}

export function toggleInitialDate(initialDate){
    return {
        type: 'INITIAL_DATE',
        initialDate
    }
}

export function toggleFinalDate(finalDate){
    return {
        type: 'FINAL_DATE',
        finalDate
    }
}

export function toggleData(data){
    return {
        type: 'TOGGLE_DATA',
        data
    }
}