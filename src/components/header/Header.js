import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavHeader = styled.header`
    height: 50px;
    margin-bottom: 25px;
    position: relative;
    color: #c8c8c8;
  
    background: linear-gradient(#484e55, #3a3f44 60%, #313539);
    
     @media (max-width: 700px) {
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
     }
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
    
    @media (max-width: 700px) {
        display: ${props => props.visible ? 'block' : 'none'};
        position: absolute;
        
        flex-direction: column;
        justify-content: end;
        
        margin: 0;
        padding: 10px;
        width: auto;
        height: auto;
        
        right: 5px;
        top: 50px;
        
        background: white;
        
        border: 1px solid #484e55
        border-radius: 0 0 4px 4px;
        border-top: none;
        
        a {
            color: #a2a2a2;
        }
    }
`;


const BurgerMenu = styled.span`
    display: none;
    
    cursor: pointer;
    
    @media (max-width: 700px) {
        display: block;
    }
`;

const Back = styled.span`
    display: none;
    
    cursor: pointer;
    
    @media (max-width: 700px) {
        display: block;
    }
`;

const Header = () => {
    const [visible, setVisible] = useState(false);

    const handleToggleMenu = () => {
        setVisible(!visible);
    };

    const handleToggleRedirect = () => {
        window.history.back();
    };

    useEffect(() => {
        if(visible) {
            setInterval(handleToggleMenu, 3000);
        }
    });

    return (
        <NavHeader>
            <Back onClick={handleToggleRedirect}>
                Back
            </Back>
            <BurgerMenu onClick={handleToggleMenu}>
                Categories
            </BurgerMenu>
            <Nav visible={visible} onClick={handleToggleMenu}>
                <li><NavLink to="/category/people" activeClassName="is-active">People</NavLink></li>
                <li><NavLink to="/category/planets" activeClassName="is-active">Planets</NavLink></li>
                <li><NavLink to="/category/starships" activeClassName="is-active">Starships</NavLink></li>
                <li><NavLink to="/category/vehicles" activeClassName="is-active">Vehicles</NavLink></li>
            </Nav>

        </NavHeader>
    );
};

export default Header;
