import css from "app.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttons}>
    <button onClick={() => onLeaveFeedback('good')} className={css.button}>
      good
    </button>
    <button onClick={() => onLeaveFeedback('neutral')} className={css.button}>
      neutral
    </button>
    <button onClick={() => onLeaveFeedback('bad')} className={css.button}>
      bad
    </button>
  </div>
);

export default FeedbackOptions;