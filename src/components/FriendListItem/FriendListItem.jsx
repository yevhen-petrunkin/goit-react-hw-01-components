import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ props: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
