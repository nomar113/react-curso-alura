import React from 'react';

function Header () {

    return (
        <nav>
            <div class="nav-wrapper cyan  darken-4 lighten-2">
                <a href="/" class="brand-logo">Casa do Código</a>
                <ul class="right">
                    <li><a href="/books">Livros</a></li>
                    <li><a href="/authors">Autores</a></li>
                    <li><a href="/about">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );

}
export default Header;