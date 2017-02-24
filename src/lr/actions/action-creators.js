import { createAction } from 'redux-actions';
import $ from 'jquery';

export default {
    add: createAction('ADD', payload => parseInt(payload)),
    addAsync: createAction('ADD_ASYNC', payload => $.ajax('data/add.json'))
}
