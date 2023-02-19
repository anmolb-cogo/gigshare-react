import "./Input.css";

const Button = (props) => {
  return (
    <div className="input button">
      <label>&nbsp;</label>
      <button className="full-btn">{props.text}</button>
    </div>
  );
};

export default Button;
