import '../css/Card.css';

const Card = (props) => {
  const { classes = [] } = props;
  return <div className={'card ' + classes.join(' ')}>{props.children}</div>;
};

export default Card;
