import "./Input.css";

const Select = (props) => {
  return (
    <div class="input">
      <label>{props.label}</label>
      <select class="text-type">
        <option>Regular</option>
        <option>Monospaced</option>
      </select>
    </div>
  );
};

export default Select;
