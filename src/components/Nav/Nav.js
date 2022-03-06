
import React, {Component} from "react";
import {Link} from "react-router-dom"
import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <Link to="/" className="nav__link active">Главная</Link>
                <Link to="/about" className="nav__link">О нас</Link>
                <Link to="/wiki" className="nav__link">База знаний</Link>
            </nav>
        )
    }
}

export default Nav