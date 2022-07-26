import PropTypes from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'
import s from '../FriendList/FriendList.module.css'

const FriendList = (props) => {
    const { friends } = props;
    return(
        <ul className={s.list} > 
            {friends.map((el) => (
                <FriendListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}
                />
            ))}
        </ul >
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
)
}

export default FriendList;