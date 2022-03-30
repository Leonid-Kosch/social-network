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
            <div className='posts'></div>
        </div>
    );
}

export default Profile;