import React from 'react'
import { useDispatch } from "react-redux";
import './style.css'
import { handleLogout } from '../../api/login'
import Table from "../Table"
import DatePick from '../DatePick'

export default function Home() {

    const dispatch = useDispatch()

    return (
        <div>
            <div className='cabecalho'>
                <h3>Digitalizações</h3>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className='logout' onClick={e => handleLogout(dispatch)}>Logout</button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <DatePick label='Data Inicial' id='dataInicial' order={0} />
                        <DatePick label='Data Final' id='dataFinal' order={1} />
                    </div>
                </div>
            </div>
            <Table />
        </div>
    )
}