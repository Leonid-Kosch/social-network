import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav () {
    return(
        <div className="nav">
            <Link to='/profile'> Профиль</Link>
            <Link to='/dialogs'> Сообщения</Link>
            <Link to='/users'> Пользовтаели</Link>
        </div>
    );
}

export default Nav;