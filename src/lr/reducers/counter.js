import { handleActions } from 'redux-actions';

import actionCreators from '../actions/action-creators';

const initialState = { value : 0 }

export default handleActions({
    [actionCreators.add](state, action) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    },
    [actionCreators.addAsync](state, action) {
        return {
            ...state,
            value: state.value + action.payload.value,
        };
    }
}, initialState);
