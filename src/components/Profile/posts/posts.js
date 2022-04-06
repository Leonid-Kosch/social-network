import Post from "./post/post.js";

function Posts () {
    return(
        <div className='posts'>
            <div className='posts__head'>
                <h2>
                    Мои посты
                </h2>
                <div className='posts__input'>
                    <input placeholder='Введите тексты' type='text'/>
                    <button>Опубликовать</button>
                </div>
            </div>
            <div className='posts__list'>
                <Post name='LK' />
                <Post name='Chto' />
                <Post name='Aufdisufis' />
                <Post name='Leo' text='lol'/>
            </div>
        </div>
    );
}


export default Posts;