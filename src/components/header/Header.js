import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>List App</h1>
        <ul>
            <li><NavLink to="/category/people" activeClassName="is-active" exact>People</NavLink></li>
            <li><NavLink to="/category/planets" activeClassName="is-active" exact>Planets</NavLink></li>
            <li><NavLink to="/category/starships" activeClassName="is-active" exact>Starships</NavLink></li>
            <li><NavLink to="/category/vehicles" activeClassName="is-active" exact>Vehicles</NavLink></li>
        </ul>
    </header>
);

export default Header;
