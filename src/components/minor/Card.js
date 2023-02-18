import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="poster">
        <img src="https://i.ibb.co/6NkRmqs/Image.png"></img>
      </div>
      <div className="details">
        {/* Category */}
        <span className="category">Design</span>
        <span className="title">
          <span>UX review presentations</span>
        </span>
        <span className="desc">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?How do you create compelling presentations
          that wow your colleagues and impress your managers?
        </span>
        <span className="profile">
          <span
            className="avatar"
            style={{
              backgroundImage:
                "url(" +
                "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            Hello
          </span>
          <span className="avatar-details">
            <p className="name">Olivia Rhye</p>
            <p className="date">20 Jan 2022</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
