import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/componentReducer';
import BookList from './components/List';
import BookForm from './components/Form';
import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <p class="title">Library</p>
        <BookForm />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
