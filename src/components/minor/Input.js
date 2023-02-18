import "./Input.css";

const Input = (props) => {
  return (
    <div class="input">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
