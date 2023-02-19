import Button from "./Button";
import "./Card.css";

const Card = (props) => {
  var categories = props.categories;

  const convertDate = (date) => {
    var parts = date.slice(0, 10).split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toDateString();
  };
  const findCategory = (index) => {
    var category = categories[index - 1];
    return category;
  };
  return (
    <div className="card">
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <div className="details">
        {/* Category */}
        <span className="category">{findCategory(props.categoryId)}</span>
        <span className="title">
          <span>{props.title}</span>
        </span>
        <span className="desc">{props.body}</span>
        <span className="button-details">
          {convertDate(props.date)}
          <Button text="Edit"></Button>
          <Button text="Delete"></Button>
        </span>
      </div>
    </div>
  );
};

export default Card;
