import React, { Component, Fragment } from 'react';
import './App.css';

import Tabela from './Tabela'
import Formulario from './Formulario'

class App extends Component {
  state = {
    books: [
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
    ],
  };

  removeBook = index => {

    const { books } = this.state;

    this.setState(
      {
        books: books.filter((book, currentIndex) => {
          return currentIndex !== index
        }),
      }
    );

  }

  render () {
    return (
      <Fragment>
        <Tabela books={this.state.books} removeBook={this.removeBook} />
        <Formulario />
      </Fragment>
    );
  }

}

export default App;
