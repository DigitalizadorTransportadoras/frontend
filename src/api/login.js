import axios from 'axios'
import { saveToken, deleteToken, getToken } from "../util/localStorage";
import { toggleAuth, errorDispatch, logoutAuth } from "../store/actions/auth";
import { api } from "../config";

export async function handleLogin(email, password, dispatch) {
    await axios.post(`${api}usuarios/login`, {
        email, password
    }).then(data => {
        saveToken(data.data.usuario.token)
        const user = data.data.usuario
        dispatch(toggleAuth(true, user))
    }).catch(err => {
        dispatch(toggleAuth(false, {}, err))
    })
}

export function handleLogout(dispatch) {
    deleteToken()
    dispatch(logoutAuth())
}

export function getLogin(dispatch) {

    axios.get(api, {
        headers: {
            Authorization: getToken()
        }
    }).then(data => {

        const user = data.data.user
        saveToken(data.data.token)
        dispatch(toggleAuth(true, user))

    }).catch(err => {
       // dispatch(toggleAuth(false, null, err))
    })
}

export function signIn(user, dispatch) {

    const { name, login, password } = user

    axios.post(`${api}usuarios/register`, { nome: name, email: login, password }).then(data => {

        const user = data.data.usuario
        saveToken(data.data.usuario.token)
        dispatch(toggleAuth(true, user))

    }).catch(err => {
        console.log(err)
        dispatch(toggleAuth(false, undefined, err))
    })
}