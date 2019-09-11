import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Ramon</td>
                <td>Aprendendo React</td>
                <td>50</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Aline</td>
                <td>Aprendendo Vue.js</td>
                <td>500</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Bruno</td>
                <td>Aprendendo Git</td>
                <td>10</td>
                <td><button>Remover</button></td>
            </tr>
        </tbody>
    )
}


class Tabela extends Component {
    render () {
        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        )
    }
}

export default Tabela;