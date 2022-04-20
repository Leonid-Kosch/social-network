import Message from "./Message/Message";
import Me from '../../../image/me.jpg'

function Messages () {
    return(
        <div className="messages">
           <Message Img={Me} Name='Леонид' Text='test'/> 
           <Message Img={Me} Name='Андрей' Text='Hello world'/> 
           <Message Img={Me} Name='Саша' Text='56'/> 
           <Message Img={Me} Name='Алексей' Text='6'/> 
           <Message Img={Me} Name='Маша' Text='8'/>
           <Message Img={Me} Name='Мария' Text='8'/> 
           <Message Img={Me} Name='Катя' Text='8'/> 
           <Message Img={Me} Name='Александр' Text='8'/>  
           <div className="messages__managment">
                <textarea placeholder="Сообщение"></textarea>
                <button><i class="fa-solid fa-angle-up"></i></button>
            </div>
        </div>

    );
}
export default Messages;