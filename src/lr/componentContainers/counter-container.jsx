import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../actions/action-creators';

import Counter from '../components/counter';

@connect(
    state => ({ value: state.counter.value }),
    dispatch => ({ actions: bindActionCreators( actionCreators, dispatch )})
)
export default class CounterContainer extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }
    
    render() {
        return (<Counter value={this.props.value} actions={this.props.actions}/>);
    }
}
