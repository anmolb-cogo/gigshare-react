import FirstCard from "../minor/FirstCard";
import LandCard from "../minor/LandCard";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import VerticalCard from "../minor/VerticalCard";

const Home = () => {
  const [articleList, setArticleList] = useState([]);

  //api call
  const getArticles = async function () {
    const list = await axios.get(
      "http://www.omdbapi.com/?s=harry&apikey=69cc29ba"
    );
    setArticleList(list.data.Search);
    console.log(list);
  };

  //make API call
  useEffect(function () {
    getArticles();
  }, []);

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
        <div className="unaligned-cards">
          <span className="hor">
            <FirstCard></FirstCard>
          </span>
          <span className="vert">
            <LandCard></LandCard>
            <LandCard></LandCard>
          </span>
        </div>
      </div>
      <div className="middle-bottom">
        <h3>All Blog Posts</h3>
        <div className="aligned-cards">
          <VerticalCard></VerticalCard>
          <VerticalCard></VerticalCard>
          <VerticalCard></VerticalCard>
          <VerticalCard></VerticalCard>
          <VerticalCard></VerticalCard>
          <VerticalCard></VerticalCard>
        </div>
        <span className="pagination">
          <Link to="/blogs">Show All</Link> &nbsp;
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.16669 6.99996H12.8334M12.8334 6.99996L7.00002 1.16663M12.8334 6.99996L7.00002 12.8333"
              stroke="#475467"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="ending">
        <span className="ending-text">
          <p>
            No long-term contracts. <br></br> No Catches.
          </p>
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
