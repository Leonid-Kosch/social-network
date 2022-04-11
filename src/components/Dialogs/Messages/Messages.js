import Message from "./Message/Message";
import Me from '../../../image/me.jpg'

function Messages () {
    return(
        <div className="messages">
           <Message Img={Me} Name='Leonid' Text='Ja na zavtrak jel chto to'/> 
           <Message Img={Me} Name='Net' Text='Ja na zavtrak jel chto to'/> 
           <Message Img={Me} Name='Wolk227' Text='Ja na zavtrak jel chto to'/> 
           <Message Img={Me} Name='Aleks' Text='Ja na zavtrak jel chto to'/> 
           <Message Img={Me} Name='Ololo' Text='Ja na zavtrak jel chto to'/> 
        </div>
    );
}
export default Messages;