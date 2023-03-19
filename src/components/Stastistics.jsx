const Stastistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <p>There is no feedback</p>;
  } else
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
      </div>
    );
};

export default Stastistics;
