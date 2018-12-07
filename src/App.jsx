import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import './App.css';
import Template from './components/template';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      Hello world
      <Template />
    </div>
  </Provider>
);

export default App;
