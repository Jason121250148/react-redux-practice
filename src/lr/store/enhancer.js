import reduxPromise from 'redux-promise';
import { applyMiddleware } from 'redux';

exports.default = applyMiddleware(reduxPromise);
module.exports = exports.default;
