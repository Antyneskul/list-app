import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>List App</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
        </ul>
    </header>
);

export default Header;
