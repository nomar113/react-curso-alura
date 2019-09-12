import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Livro</th>
                <th>Autor</th>
                <th>Preço</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.books.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.author}</td>
                <td>{row.price}</td>
                <td><button onClick={() => { props.removeBook(index) }} className="waves-effect waves-light btn cyan  darken-4 lighten-2">Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
}


class Tabela extends Component {
    render () {

        const { books, removeBook } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody books={books} removeBook={removeBook} />
            </table>
        )
    }
}

export default Tabela;