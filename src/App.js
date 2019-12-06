import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Result from './Containers/Result'

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];


const reducer = (state = { houses: houses, selectedHouses: 'Serpentard' }, action) => {

  switch (action.type) {
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return state = { ...state, selectedHouses: houses[action.indexSelected] }
    default:
      return state;
  }

}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Result />
      </div>
    </Provider>
  );
}

export default App;
