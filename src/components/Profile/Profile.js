import './Profile.css';
import Photo from '../../image/me.jpg';

function Profile () {
    return(
        <div className="profile">
            <div className='about-me'>
                <img src={Photo}></img>
                <h3>
                    Леонид
                </h3>
            </div>
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
        </div>
    );
}

export default Profile;