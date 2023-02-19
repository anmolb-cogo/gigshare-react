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

  //api call
  const config = {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  };
  const getMostLiked = async function () {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://181d-103-69-88-178.in.ngrok.io/mostlikes";
    const list = await axios.get(proxyUrl + url, config);
    //setMostLiked(JSON.stringify(list.data.Search));
    //console.log(JSON.stringify(list.data));
    console.log(list);
  };

  //make API call
  useEffect(function () {
    getMostLiked();
  }, []);

  const temp = [
    {
      id: 2,
      body: "Perth is home to some of the most beautiful beaches in Australia. Cottesloe Beach is a popular spot for swimming, surfing, and sunbathing. The beach has a lively atmosphere and is a great spot to catch the sunset. If you’re looking for something more secluded, head to the southern beaches like Port Beach and Leighton Beach. These beaches are perfect for a quiet day in the sun or a stroll along the coastline.",
      article_name: "The Hidden Gems of Perth",
      category_id: 2,
      user_id: 1,
      image: "https://miro.medium.com/v2/resize:fit:1400/0*K53vaN573pIUpslG",
      likes: 23,
      created_at: "2023-02-18T09:01:23.263Z",
      updated_at: "2023-02-18T09:01:23.263Z",
      username: "Anmol Bansal",
    },
    {
      id: 3,
      body: "My first approach trying to handle this issue was to map the requests trying to use the Next.js rewrite function watching the header of each request. It makes sense to work, but for now, we can’t map header values as routes, only parameters.",
      article_name: "Using wildcard subdomains as paths",
      category_id: 3,
      user_id: 2,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l0JqKFQ03UHwQqcqgIVLWw.jpeg",
      likes: 12,
      created_at: "2023-02-18T09:46:18.117Z",
      updated_at: "2023-02-18T09:46:18.117Z",
      username: "Anmol Bansal",
    },
    {
      id: 4,
      body: "This method provides the declarative API of React: You tell React what state you want the UI to be in, and it ensures that the DOM matches. This abstracts off the attribute manipulation, event handling, and manual DOM updates that you would have to utilise to develop your app otherwise.",
      article_name: "Virtual DOM in React JS",
      category_id: 1,
      user_id: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AYRufXTdVWV3z5-Uy5_jAg.png",
      likes: 10,
      created_at: "2023-02-18T11:04:25.671Z",
      updated_at: "2023-02-18T11:09:50.023Z",
      username: "Anmol Bansal",
    },
    {
      id: 2,
      body: "Perth is home to some of the most beautiful beaches in Australia. Cottesloe Beach is a popular spot for swimming, surfing, and sunbathing. The beach has a lively atmosphere and is a great spot to catch the sunset. If you’re looking for something more secluded, head to the southern beaches like Port Beach and Leighton Beach. These beaches are perfect for a quiet day in the sun or a stroll along the coastline.",
      article_name: "The Hidden Gems of Perth",
      category_id: 2,
      user_id: 1,
      image: "https://miro.medium.com/v2/resize:fit:1400/0*K53vaN573pIUpslG",
      likes: 23,
      created_at: "2023-02-18T09:01:23.263Z",
      updated_at: "2023-02-18T09:01:23.263Z",
      username: "Anmol Bansal",
    },
    {
      id: 3,
      body: "My first approach trying to handle this issue was to map the requests trying to use the Next.js rewrite function watching the header of each request. It makes sense to work, but for now, we can’t map header values as routes, only parameters.",
      article_name: "Using wildcard subdomains as paths",
      category_id: 3,
      user_id: 2,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l0JqKFQ03UHwQqcqgIVLWw.jpeg",
      likes: 12,
      created_at: "2023-02-18T09:46:18.117Z",
      updated_at: "2023-02-18T09:46:18.117Z",
      username: "Anmol Bansal",
    },
    {
      id: 4,
      body: "This method provides the declarative API of React: You tell React what state you want the UI to be in, and it ensures that the DOM matches. This abstracts off the attribute manipulation, event handling, and manual DOM updates that you would have to utilise to develop your app otherwise.",
      article_name: "Virtual DOM in React JS",
      category_id: 1,
      user_id: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AYRufXTdVWV3z5-Uy5_jAg.png",
      likes: 10,
      created_at: "2023-02-18T11:04:25.671Z",
      updated_at: "2023-02-18T11:09:50.023Z",
      username: "Anmol Bansal",
    },
    {
      id: 2,
      body: "Perth is home to some of the most beautiful beaches in Australia. Cottesloe Beach is a popular spot for swimming, surfing, and sunbathing. The beach has a lively atmosphere and is a great spot to catch the sunset. If you’re looking for something more secluded, head to the southern beaches like Port Beach and Leighton Beach. These beaches are perfect for a quiet day in the sun or a stroll along the coastline.",
      article_name: "The Hidden Gems of Perth",
      category_id: 2,
      user_id: 1,
      image: "https://miro.medium.com/v2/resize:fit:1400/0*K53vaN573pIUpslG",
      likes: 23,
      created_at: "2023-02-18T09:01:23.263Z",
      updated_at: "2023-02-18T09:01:23.263Z",
      username: "Anmol Bansal",
    },
    {
      id: 3,
      body: "My first approach trying to handle this issue was to map the requests trying to use the Next.js rewrite function watching the header of each request. It makes sense to work, but for now, we can’t map header values as routes, only parameters.",
      article_name: "Using wildcard subdomains as paths",
      category_id: 3,
      user_id: 2,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l0JqKFQ03UHwQqcqgIVLWw.jpeg",
      likes: 12,
      created_at: "2023-02-18T09:46:18.117Z",
      updated_at: "2023-02-18T09:46:18.117Z",
      username: "Anmol Bansal",
    },
    {
      id: 4,
      body: "This method provides the declarative API of React: You tell React what state you want the UI to be in, and it ensures that the DOM matches. This abstracts off the attribute manipulation, event handling, and manual DOM updates that you would have to utilise to develop your app otherwise.",
      article_name: "Virtual DOM in React JS",
      category_id: 1,
      user_id: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AYRufXTdVWV3z5-Uy5_jAg.png",
      likes: 10,
      created_at: "2023-02-18T11:04:25.671Z",
      updated_at: "2023-02-18T11:09:50.023Z",
      username: "Anmol Bansal",
    },
  ];
  useEffect(function () {
    setMostLiked(temp);
    setMostCommented(temp);
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
                    author={article.username}
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
                    author={article.username}
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
                  author={article.username}
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
