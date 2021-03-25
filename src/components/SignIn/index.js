import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { signIn } from '../../api/login'

export default function SignIn() {

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()
    const err = useSelector(state => state.err)

    return (
        <div className="Form">
            <form onSubmit={(e) => {
                e.preventDefault()
                signIn({ name, login, password }, dispatch)
                if (!err) history.push('/cadastro-usuario')
            }}>
                <h1>Formulário de Cadastro</h1>
                {err && <Alert severity="error">{err.response.data.message}</Alert>}
                <p>Nome</p>
                <TextField id='name' onChange={e => setName(e.target.value)} required fullWidth />
                <p>Login de Usuário</p>
                <TextField id='login' onChange={e => setLogin(e.target.value)} required fullWidth />
                <p>Senha</p>
                <TextField type='password' onChange={e => setPasswordConfirm(e.target.value)} required fullWidth />
                <p>Repita a Senha</p>
                <TextField type='password' onBlur={e => {
                    if (passwordConfirm.length > 0 && passwordConfirm === e.target.value)
                        setPassword(e.target.value)
                    else
                        alert("senhas não conferem")
                }} fullWidth />
                <Button type="submit" fullWidth>Cadastrar</Button>
            </form>
        </div>
    )
}
