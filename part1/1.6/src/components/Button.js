const Button = ({ text, onClickFunc }) => {
  return <button onClick={onClickFunc}>{text}</button>;
};

export default Button;
