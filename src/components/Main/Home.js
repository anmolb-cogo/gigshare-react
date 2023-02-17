import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="landing">
        <div className="main">
          <span className="small">GigShare Blogs</span>
          <span className="big">A living network of curious minds.</span>
          <span className="mid">
            Anyone can write on GigShare. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
          </span>
        </div>
      </div>
      <div className="middle-top">
        <h3>Recent Blog Posts</h3>
        <div className="unaligned-cards"></div>
      </div>
      <div className="middle-bottom">
        <h3>All Blog Posts</h3>
        <div className="aligned-cards"></div>
        <span className="pagination"></span>
      </div>
      <div className="ending">
        <span className="ending-text">
          <p>Fuel great thinking.</p>
          Become a Medium member to enjoy unlimited access and directly support
          the writers you read most.
          {/* One Span with 2 Buttons Hollow and Filled: Learn More and Buy Now */}
        </span>
        <img src="https://i.ibb.co/HK0Ft94/Contents.png" alt="Contents" />
      </div>
    </div>
  );
};

export default Home;
