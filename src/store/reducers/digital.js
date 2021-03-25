export const DIGITAL_INITIAL_STATE =
{
    digitalizacoes: [
        {
            transportadora: 'teste',
            qtde: 1,
            data: '29-01-2021',
        }, {
            transportadora: 'teste2',
            qtde: 12,
            data: '29-01-2021',
        }
    ]
}

export default function digital(state = DIGITAL_INITIAL_STATE, action) {
    if (action.type === 'GET_DIGITALS') {
        return {
            ...state,
            digitalizacoes: action.digitalizacoes,
        }
    }

    return state
}