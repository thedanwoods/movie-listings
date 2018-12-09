import React from 'react';
import { Provider } from 'react-redux';
import createStore from './utils/createStore';
import Layout from './components/Layout';
import './App.css';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
