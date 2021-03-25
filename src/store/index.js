import { createStore } from 'redux';
import root from './reducers/auth'

const store = createStore(root)

export default store;