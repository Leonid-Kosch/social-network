import React from "react";
import { NavLink } from "react-router-dom";
function Dialogsitem (props) {
    return(
        <div className='dialog__user'>
            <NavLink to={'/Dialogs/${props.id}'}>{props.name}</NavLink>
        </div>
    );
}
export default Dialogsitem;