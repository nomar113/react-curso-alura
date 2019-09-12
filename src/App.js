import React, { Component, Fragment } from 'react';
import './App.css'

import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header'
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

  listenSubmit = book => {
    this.setState({ books: [...this.state.books, book] })
  }

  render () {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela books={this.state.books} removeBook={this.removeBook} />
          <Formulario listenSubmit={this.listenSubmit} />
        </div>
      </Fragment>
    );
  }

}

export default App;
