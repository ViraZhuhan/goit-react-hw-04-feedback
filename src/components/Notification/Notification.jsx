import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
