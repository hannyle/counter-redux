import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './components/Counter';
import { incrementDecrement } from './reducers/countReducers';

const store = createStore(incrementDecrement);

class App extends Component {
  render() {
    return (
     <Counter
       value={store.getState()}
       onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
       onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
     />
    );
  }
}

export default App;
