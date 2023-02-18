import "./Input.css";

const Button = (props) => {
  return (
    <div className="input">
      <button class="full-btn">{props.text}</button>;
    </div>
  );
};

export default Button;
