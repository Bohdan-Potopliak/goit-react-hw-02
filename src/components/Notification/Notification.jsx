import PropTypes from "prop-types";
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
