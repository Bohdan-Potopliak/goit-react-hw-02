import s from "./Description.module.css";
import PropTypes from "prop-types";

const Description = ({ title, text }) => {
  return (
    <div className={s.descriptionCnt}>
      <h1 className={s.descriptionTitle}>{title}</h1>
      <p className={s.descriptionText}>{text}</p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;
