import Me from '../../../../image/me.jpg';
function Message (props) {
    return(
        <div className="message">
            <img src={props.Img}/>
            <div className="content">
                <h4>{props.Name}</h4>
                <p> 
                    {props.Text}
                </p>
            </div>
        </div>
    );
}
export default Message;