import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = React.memo(function Header() {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li>
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/components">Component API</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/style-guide">Style Guide</NavLink>
                </li>
            </ul>
        </nav>
    );
});