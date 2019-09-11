import React from 'react';
import './App.css';

import Tabela from './Tabela'

function App () {
  const books = [
    {
      name: 'React',
      author: 'Ramon',
      price: '199'
    },
    {
      name: 'React Native',
      author: 'Aline',
      price: '599'
    },
    {
      name: 'A vida secreta do Bernard',
      author: 'Bernard',
      price: '1099'
    }
  ];

  return (
    <div className="App">
      <Tabela books={books} />
    </div>
  );
}

export default App;
