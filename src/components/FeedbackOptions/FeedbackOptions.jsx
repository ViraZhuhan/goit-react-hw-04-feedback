import { ButtonList, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {

  return (
    <ButtonList>
    {options.map(element => (
      <Button key={element} type="button" onClick={onLeaveFeedback} name={element}>
        {element}
      </Button>
    ))}
  </ButtonList>
  );
};


