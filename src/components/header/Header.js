import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavHeader = styled.header`
    height: 50px;
    margin-bottom: 25px;
    
    background: linear-gradient(#484e55, #3a3f44 60%, #313539);
`;

const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 100%;
    width: 80%;
    
    margin: 0 auto;
    
    a {
        color: #c8c8c8;
        text-decoration: none;
        
        &.is-active,
        &:hover {
            color: #ffe300;
            outline: none;
        }
    }
`;

const Header = () => (
    <NavHeader>
        <Nav>
            <li><NavLink to="/category/people"  activeClassName="is-active">People</NavLink></li>
            <li><NavLink to="/category/planets" activeClassName="is-active">Planets</NavLink></li>
            <li><NavLink to="/category/starships" activeClassName="is-active">Starships</NavLink></li>
            <li><NavLink to="/category/vehicles" activeClassName="is-active">Vehicles</NavLink></li>
        </Nav>
    </NavHeader>
);

export default Header;
