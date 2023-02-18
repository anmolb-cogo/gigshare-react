import "./Card.css";

const LandCard = () => {
  return (
    <div className="landCard">
      <div className="poster">
        <img src="https://i.ibb.co/6NkRmqs/Image.png"></img>
      </div>
      <div className="details">
        <span className="author">Olivia Rhye • 20 Jan 2022</span>
        <span className="title">
          <span>
            UX review presentations UX review presentations UX review
            presentations
          </span>
        </span>
        <span className="desc">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?How do you create compelling presentations
          that wow your colleagues and impress your managers?
        </span>
        <span className="pills">
          <span className="pill">Design</span>
          <span className="pill">Research</span>
        </span>
      </div>
    </div>
  );
};

export default LandCard;
