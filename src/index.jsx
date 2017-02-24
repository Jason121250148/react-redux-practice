import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './lr/store';
import CounterContainer from './lr/componentContainers/counter-container';

const store = configStore({ counter: {value: 0 }});

ReactDOM.render(<Provider store={ store }>
        <CounterContainer> </CounterContainer>
    </Provider>,
    document.getElementById('react-root'));
