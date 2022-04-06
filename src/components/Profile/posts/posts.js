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
                
            </div>
        </div>
    );
}


export default Posts;