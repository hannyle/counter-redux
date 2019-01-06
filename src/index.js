import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
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

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
