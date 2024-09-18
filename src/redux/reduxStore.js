import { createStore } from 'redux';
import Reducer from './reducers/componentReducer';
const store = createStore(Reducer);

export default store;