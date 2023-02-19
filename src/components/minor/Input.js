import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.func(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
