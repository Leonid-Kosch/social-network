import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import Messages from './Messages/Messages';
function Dialogs () {
    return(
        <div className='dialogs'>
            <div className='dialog__list'>
                <NavLink to='/'>Andrey</NavLink>
                <NavLink to='/'>Leonid</NavLink>
                <NavLink to='/'>Dima</NavLink>
            </div>
            <Messages />
        </div>
    );
}
export default Dialogs;