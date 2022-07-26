import PropTypes from 'prop-types'
import { ProfileStyled, StatsStyled } from './Profile.styles';

const Profile = (props) => {
  const {
    username,
    tag,
    location,
    avatar: imgUrl,
    stats: { followers, views, likes },
  } = props;
  return (
        <ProfileStyled>
          <div className="description">
             <img
             src={imgUrl}
             alt={username}
             className="avatar"
             />
             <p className="name">{username}</p>
             <p className="tag">{`@${tag}`}</p>
            <p className="location">{location}</p>
          </div>

           <StatsStyled>
             <li className="item">
               <span className="label">Followers</span>
          <span className="quantity">{ followers}</span>
             </li>
             <li className="item">
               <span className="label">Views</span>
          <span className="quantity">{views}</span>
             </li>
             <li className="item"> 
               <span className="label">Likes</span>
               <span className="quantity">{likes}</span>
             </li>
           </StatsStyled>
        </ProfileStyled>   
);
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

export default Profile;