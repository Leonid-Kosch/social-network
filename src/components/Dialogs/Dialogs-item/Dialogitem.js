import React from "react";
import { NavLink } from "react-router-dom";
function Dialogsitem (props) {
    return(
        <div className='dialog__user'>
            <NavLink to={'/dialogs/${props.id}'}>{props.Name}</NavLink>
        </div>
    );
}
export default Dialogsitem;