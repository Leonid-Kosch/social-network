import Message from "./Message/Message";
import Me from '../../../image/me.jpg'

function Messages () {
    return(
        <div className="messages">
            <div className="messages__managment">
                <textarea placeholder="Сообщение"></textarea>
                <button><i class="fa-solid fa-angle-up"></i></button>
            </div>
           <Message Img={Me} Name='Leonid' Text='test'/> 
           <Message Img={Me} Name='Net' Text='2'/> 
           <Message Img={Me} Name='Wolk227' Text='4'/> 
           <Message Img={Me} Name='Aleks' Text='6'/> 
           <Message Img={Me} Name='Ololo' Text='8'/>
           <Message Img={Me} Name='Ololo' Text='8'/> 
           <Message Img={Me} Name='Ololo' Text='8'/> 
           <Message Img={Me} Name='Ololo' Text='8'/>  
        </div>
    );
}
export default Messages;