import React, { PropTypes }  from 'react';

export default function Counter(props) {
    return (
        <div>
            <label>{ props.value }</label>
            <button onClick={(e) => props.actions.add(1)}>ADD</button>
            <button onClick={(e) => props.actions.addAsync(1)}>ADD_ASYNC</button>
        </div>
    );
}
