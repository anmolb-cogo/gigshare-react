import "./Card.css";

const VerticalCard = () => {
  return (
    <div className="firstCard verticalCard">
      <div className="poster">
        <img src="https://i.ibb.co/6NkRmqs/Image.png"></img>
      </div>
      <div className="details">
        <span className="author">Olivia Rhye • 20 Jan 2022</span>
        <span className="title">
          <span>UX review presentations</span>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>
        <span className="desc">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </span>
        <span className="pills">
          <span className="pill">Design</span>
          <span className="pill">Research</span>
          <span className="pill">Presentation</span>
        </span>
      </div>
    </div>
  );
};

export default VerticalCard;
