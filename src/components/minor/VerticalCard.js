import "./Card.css";

const VerticalCard = (props) => {
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
    <div className="firstCard verticalCard">
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <div className="details">
        <span className="author">
          {props.author} • {convertDate(props.date)}
        </span>
        <span className="title">
          <span>{props.title}</span>
          <span>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 21L17 11M17 11H7M17 11V21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
        <span className="desc">{props.body}</span>
        <span className="pills">
          <span className="pill">{findCategory(props.categoryId)}</span>
        </span>
      </div>
    </div>
  );
};

export default VerticalCard;
