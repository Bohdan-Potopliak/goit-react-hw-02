import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  if (total === 0) {
    return <p className={s.noFeedback}>No feedback yet</p>; // Повідомлення, якщо відгуків немає
  }

  const feedbackData = [
    { label: "Good", value: good },
    { label: "Neutral", value: neutral },
    { label: "Bad", value: bad },
    { label: "Total", value: total },
    { label: "Positive feedback", value: `${positivePercentage}%` },
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
};

export default Feedback;
