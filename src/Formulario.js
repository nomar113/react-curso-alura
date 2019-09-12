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
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="name">Livro</label>
                        <input
                            className="validate"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.listenInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="author">Autor</label>
                        <input
                            className="validate"
                            id="author"
                            type="text"
                            name="author"
                            value={author}
                            onChange={this.listenInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="price">Preço</label>
                        <input
                            className="validate"
                            id="price"
                            type="text"
                            name="price"
                            value={price}
                            onChange={this.listenInput}
                        />
                    </div>
                </div>
                <button type="button" className="waves-effect waves-light btn cyan  darken-4 lighten-2" onClick={this.submitForm}>Salvar</button>
            </form>
        );
    }
}
export default Formulario;