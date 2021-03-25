import { combineReducers } from 'hooks-combine-reducers';
import auth from './auth'
import digital from './digital'

export default combineReducers({
    digital, auth
})