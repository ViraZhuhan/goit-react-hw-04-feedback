import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section/Section';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const totalValue = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const options = {good, neutral, bad}

  return (
    <Container>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={Object.keys(options )}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalValue}
        positivePercentage={positiveFeedbackPercentage}
      />
    </Container>
  );
};

export default App;
