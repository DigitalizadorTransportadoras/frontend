import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import './style.css'
import { useDispatch } from 'react-redux'
import { handleLogin } from "../../api/login";

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const err = useSelector(state => state.err)

  return (
    <div className="Form">
      <form onSubmit={e => {
        e.preventDefault()
        handleLogin(email, password, dispatch)
      }}>
        <center><h3>Controle Digitalizador</h3></center>
        <h5>Login</h5>
        {err && <Alert severity="error">{err.response.data.errors}</Alert>}
        <TextField id="email" label="Email" onChange={e => setEmail(e.target.value)} fullWidth required />
        <TextField id="password" type='password' label="Senha" onChange={e => setPassword(e.target.value)} fullWidth required />
        <div className='formulario-botoes'>
          <Button type="submit">Entrar</Button>
          <Link to="/cadastro-usuario">Registrar novo usuário</Link>
        </div>
      </form>
    </div>
  );
}