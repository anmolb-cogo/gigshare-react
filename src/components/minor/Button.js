import "./Input.css";

const Button = (props) => {
  return (
    <div className="input button">
      <label>&nbsp;</label>
      <button className="full-btn" onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default Button;
