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
                <input placeholder='Введите тексты' type='text'/>
                <button>Опубликовать</button>
            </div>
        </div>
    );
}

export default Profile;