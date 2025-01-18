import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;

  const feedbackData = [
    { label: "Good", value: good },
    { label: "Neutral", value: neutral },
    { label: "Bad", value: bad },
    { label: "Total", value: total },
    { label: "Positive feedback", value: `${positiveFeedback}%` },
  ];

  return (
    <div className={s.feedback}>
      {feedbackData.map(({ label, value }) => (
        <p key={label}>
          {label}: {value}
        </p>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
