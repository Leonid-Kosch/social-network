import './Profile.css';
import Photo from '../../image/me.jpg';
import Posts from './posts/posts.js';

function Profile () {
    return(
        <div className="profile">
            <div className='about-me'>
                <img src={Photo}></img>
                <h3>
                    Леонид
                </h3>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;