import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Todo List</h1>
            <a href='https://github.com/EDZakharov'><span><i className="fab fa-github"/> EDZakharov</span></a>
        </header>
    );
};

export default Header;