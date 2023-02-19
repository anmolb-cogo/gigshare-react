import { useEffect } from "react";
import "./Input.css";

const Select = (props) => {
  var temp = props.arr;
  console.log(temp);
  return (
    <div className="input">
      <label>{props.label}</label>
      <select
        className="text-type"
        value={props.value}
        onChange={(e) => {
          props.func(e.target.value);
        }}
      >
        <option selected value={""}>
          Select an Option
        </option>
        {temp.map((cat) => {
          return <option value={cat}>{cat}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
