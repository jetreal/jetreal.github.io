import React from 'react';
import './App.css';
import ContainerNotesList from './components/NotesList/ContainerNotesList';

import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Test Quiz
          </p>
        </header>
        <ContainerNotesList />
      </div>
    </Provider>
  );
}

export default App;
