import React from 'react';

import {incrementValue, decrementValue} from '../actions/counter-actions';
import CounterButton from '../components/counter-button';

const App = ({
  counter,
  dispatch
}) => (
	<div className='container'>
    <h1>Hello World!</h1>
    <p>React Starter Project</p>
    <hr />
    <p>Testing Redux</p>
    <p>{counter}</p>
    <CounterButton displayText='+'
      onChangeClick={() => dispatch(incrementValue())}
    />
    <CounterButton displayText='-'
      onChangeClick={() => dispatch(decrementValue())}
    />
	</div>
);

export default App;
