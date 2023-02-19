import FirstCard from "../minor/FirstCard";
import LandCard from "../minor/LandCard";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import VerticalCard from "../minor/VerticalCard";

const Home = (props) => {
  const [mostLiked, setMostLiked] = useState([]);
  const [mostCommented, setMostCommented] = useState([]);
  var baseURL = props.baseURL;
  console.log(baseURL);

  //api call
  const getMostLiked = async function () {
    const url = baseURL + "mostlikes";
    console.log(url);
    const list = await axios.get(url);
    setMostLiked(list.data);
  };

  const getMostCommented = async function () {
    const url = baseURL + "mostcomments";
    const list = await axios.get(url);
    setMostCommented(list.data);
  };

  //make API call
  useEffect(function () {
    getMostLiked();
    getMostCommented();
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
        <h3>Trending Blog Posts</h3>
        <div className="unaligned-cards">
          <span className="hor">
            {mostLiked.map((article, idx) => {
              if (idx === 0) {
                return (
                  <FirstCard
                    key={article.id}
                    poster={article.image}
                    body={article.body}
                    categories={props.categories}
                    categoryId={article.category_id}
                    title={article.article_name}
                    avatar={article.profile}
                    author={article.user_name}
                    date={article.created_at}></FirstCard>
                );
              }
            })}
          </span>
          <span className="vert">
            {mostLiked.map((article, idx) => {
              if (idx === 1 || idx === 2) {
                return (
                  <LandCard
                    key={article.id}
                    poster={article.image}
                    body={article.body}
                    categories={props.categories}
                    categoryId={article.category_id}
                    title={article.article_name}
                    avatar={article.profile}
                    author={article.user_name}
                    date={article.created_at}></LandCard>
                );
              }
            })}
          </span>
        </div>
      </div>
      <div className="middle-bottom">
        <h3>All Blog Posts - Sorted by Number of Comments</h3>
        <div className="aligned-cards">
          {mostCommented.map((article, idx) => {
            if (idx > 0 && idx <= 8) {
              return (
                <VerticalCard
                  key={article.id}
                  poster={article.image}
                  body={article.body}
                  categories={props.categories}
                  categoryId={article.category_id}
                  title={article.article_name}
                  avatar={article.profile}
                  author={article.user_name}
                  date={article.created_at}></VerticalCard>
              );
            }
          })}
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
