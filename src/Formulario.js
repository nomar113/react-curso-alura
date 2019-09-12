import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            author: '',
            price: ''
        }

        this.state = this.initialState;
    }

    render () {

        const { name, author, price } = this.state;

        return (
            <form>
                <label htmlFor="name">Livro</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                />
                <label htmlFor="author">Autor</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={author}
                />
                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    value={price}
                />
                <button type="button">Salvar</button>
            </form>
        );
    }
}
export default Formulario;