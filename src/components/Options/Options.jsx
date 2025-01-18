import PropTypes from "prop-types";
import s from "./Options.module.css";

const Options = ({
  onLeaveFeedback,
  onReset,
  totalFeedback,
  feedbackTypes,
}) => (
  <div className={s.options}>
    {feedbackTypes.map((type) => (
      <button key={type} onClick={() => onLeaveFeedback(type)}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ))}
    {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
  </div>
);

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  feedbackTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Options;
