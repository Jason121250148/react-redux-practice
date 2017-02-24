import { createStore } from 'redux';
import reducers from '../reducers';

let enhancer = process.env.NODE_ENVV === 'production' ? require('./enhancer.js').default : require('./enhancer.dev.js').default;

export default function configStore(initialState = {}) {
    return enhancer(createStore)(reducers, initialState);
}
