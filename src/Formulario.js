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

    listenInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.listenSubmit(this.state);
        this.setState(this.initialState);
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
                    onChange={this.listenInput}
                />
                <label htmlFor="author">Autor</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.listenInput}
                />
                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    value={price}
                    onChange={this.listenInput}
                />
                <button type="button" onClick={this.submitForm}>Salvar</button>
            </form>
        );
    }
}
export default Formulario;