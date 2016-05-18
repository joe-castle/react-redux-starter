import React, {PropTypes, Component} from 'react';

import {incrementCounter, decrementCounter} from '../actions/counterActions';
import CounterButton from '../components/CounterButton';

class App extends Component {
  static propTypes = {
    counter: PropTypes.number,
    dispatch: PropTypes.func
  };

  render() {
    const {counter, dispatch} = this.props;

    return (
      <div className='container'>
        <h1>React Starter Project</h1>
        <p>Test Redux:</p>
        <p>{counter}</p>
        <CounterButton displayText='+'
          onChangeClick={() => dispatch(incrementCounter())}
        />
        <CounterButton displayText='-'
          onChangeClick={() => dispatch(decrementCounter())}
        />
      </div>
    );
  }
}

export default App;
