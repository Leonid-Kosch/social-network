import { NavLink } from 'react-router-dom';
import Dialogsitem from './Dialogs-item/Dialogitem';
import './Dialogs.css';
import Messages from './Messages/Messages';
function Dialogs () {
    return(
        <div className='dialogs'>
            <div className='dialog__list'>
                <Dialogsitem Name='Elon Mysk' id='1'/>
                <Dialogsitem Name='Leonid'/>
                <Dialogsitem Name='Donald Trump'/>
            </div>
            <Messages />
        </div>
    );
}
export default Dialogs;