
import React, {Component} from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="/" className="nav__link">Главная</a>
                <a href="/about" className="nav__link">О нас</a>
                <a href="/wiki" className="nav__link">База знаний</a>
            </nav>
        )
    }
}

export default Nav