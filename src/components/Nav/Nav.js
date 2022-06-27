import './Nav.css';
import {NavLink} from 'react-router-dom';

function Nav () {
    return(
        <div className="nav">
            <NavLink to='/profile'> Профиль</NavLink>
            <NavLink to='/dialogs'> Сообщения</NavLink>
            <NavLink to='/users'> Пользовтаели</NavLink>
        </div>
    );
}

export default Nav;