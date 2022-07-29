import React from 'react';
import Dialogsitem from './Dialogs-item/Dialogitem';
import './Dialogs.css';
import Messages from './Messages/Messages';
let dialogNames = [
    {name:'elon mysk', id:1},
    {name:'leonid', id:2},
    {name:'donald trump', id:3},
    {name:'tim kuk', id:4}
]
function Dialogs () {
    return(
        <div className='dialogs'>
            <div className='dialog__list'>
                {dialogNames.map((e)=><Dialogsitem name={e.name} id={e.id}/>)}
            </div>
            <Messages />
        </div>
    );
}
export default Dialogs;