import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IPet {
  name: string;
  age: number;
}

interface IPerson{
  name: string;
  surname: string;
  age: number;
  pet?: IPet;
}

const printPersonFullName = (person: IPerson):string => {
  return `${person.name} ${person.surname}`;
}

class App extends React.Component {
  public render() {
    console.log(printPersonFullName({
      age: 2,
      name: 'kreso',
      surname: 'lijepi',
    }));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">nebitno sto je ovdje</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
