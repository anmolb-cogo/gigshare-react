import "./Card.css";

const LandCard = (props) => {
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
    <div className="landCard">
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <div className="details">
        <span className="author">
          {props.author} • {convertDate(props.date)}
        </span>
        <span className="title">
          <span>{props.title}</span>
        </span>
        <span className="desc">{props.body}</span>
        <span className="pills">
          <span className="pill">{findCategory(props.categoryId)}</span>
        </span>
      </div>
    </div>
  );
};

export default LandCard;
