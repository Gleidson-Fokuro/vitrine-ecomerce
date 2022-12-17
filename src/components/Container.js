import '../css/Container.css';

const Container = (props) => {
  const { classes = [] } = props;
  return (
    <div className={'container ' + classes.join(' ')}>{props.children}</div>
  );
};

export default Container;
