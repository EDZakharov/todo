import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Todo List</h1>
        </header>
    );
};

export default Header;