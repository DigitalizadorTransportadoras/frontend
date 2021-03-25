export function saveToken(token) {
    if (token) {
        const tokenSplited = token.split('.')
        localStorage.setItem('token0', tokenSplited[0])
        localStorage.setItem('token1', tokenSplited[1])
        localStorage.setItem('token2', tokenSplited[2])
    }
}

export function getToken() {
    let authToken = null
    if (localStorage.length > 0)
        authToken = localStorage.getItem('token0') +
            localStorage.getItem('token1') +
            localStorage.getItem('token2')

    return authToken
}

export function deleteToken() {
    localStorage.clear()
}

export function initApp() {

}