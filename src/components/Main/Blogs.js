import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../minor/Card";
import Input from "../minor/Input";
import Select from "../minor/Select";
import "./Blogs.css";

const Blogs = (props) => {
  const [articleList, setArticleList] = useState([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [authFilter, setAuthFilter] = useState("");
  const [authors, setAuthors] = useState("");

  //api call
  const getAuthors = async function () {
    const list = await axios.get(
      "http://www.omdbapi.com/?s=harry&apikey=69cc29ba"
    );
    setAuthors(list.data);
  };

  // //make API call
  useEffect(function () {
    getAuthors();
  }, []);

  const temp = [
    {
      id: 1,
      article_name: "Mastering JavaScript",
      body: "JavaScript is one of the most popular programming languages in the world and is used by millions of developers every day. It is a versatile language that can be used to create dynamic and interactive websites, desktop and mobile applications, and more.",
      category_id: 1,
      user_id: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sW_fIK4OGhdxjRTxIWHjXw.png",
      likes: 23,
      created_at: "2023-02-18T09:01:23.263Z",
      created_at: "2023-02-18T09:01:23.263Z",
      username: "Arpit Agarwal",
      profile:
        "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    },
    {
      id: 2,
      article_name: "Mastering TypeScript",
      body: "JavaScript is one of the most popular programming languages in the world and is used by millions of developers every day. It is a versatile language that can be used to create dynamic and interactive websites, desktop and mobile applications, and more.",
      category_id: 2,
      user_id: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sW_fIK4OGhdxjRTxIWHjXw.png",
      likes: 4,
      created_at: "2022-12-13T09:01:23.263Z",
      created_at: "2022-12-12T09:01:23.263Z",
      username: "Anmol Bansal",
      profile:
        "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    },
  ];
  //api call
  // const getArticles = async function () {
  //   const list = await axios.get(
  //     "http://www.omdbapi.com/?s=harry&apikey=69cc29ba"
  //   );
  //   setArticleList(list.data);
  //   console.log(list);
  // };

  // //make API call
  // useEffect(function () {
  //   getArticles();
  // }, []);
  useEffect(function () {
    setArticleList(temp);
  }, []);

  return (
    <div className="home">
      <div className="landing">
        <div className="main">
          <span className="small">GigShare Blogs</span>
          <span className="big">
            Discover stories, thinking, and expertise from writers on any topic.
          </span>
          <span className="mid">
            "We read and write because we are members of the human race. And the
            human race is filled with passion. And medicine, law, business,
            engineering, these are noble pursuits and necessary to sustain life.
            But reading and writing are what we stay alive for." - John Keating
          </span>
          <span className="filters">
            <Input
              type="text"
              placeholder="Search for an Article"
              label="Search for an Article"
              value={search}
              func={setSearch}></Input>
            <Select
              label="Filter by Category"
              categories={props.categories}
              value={catFilter}
              func={setCatFilter}></Select>
            <Select
              label="Filter by Author"
              categories={props.categories}
              value={authFilter}
              func={setAuthFilter}></Select>
          </span>
        </div>
      </div>
      <div className="all-cards">
        {articleList
          .filter((article) => {
            if (search.length == 0) {
              return article;
            } else if (
              article.article_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return article;
            }
          })
          .filter((article) => {
            if (catFilter.length == 0) {
              return article;
            } else if (
              props.categories[article.category_id - 1].includes(catFilter)
            ) {
              return article;
            }
          })
          .filter((article) => {
            if (authFilter.length == 0) {
              return article;
            } else if (
              props.categories[article.category_id - 1].includes(authFilter)
            ) {
              return article;
            }
          })
          .map((article) => {
            return (
              <Card
                key={article.id}
                poster={article.image}
                body={article.body}
                categories={props.categories}
                categoryId={article.category_id}
                title={article.article_name}
                avatar={article.profile}
                author={article.username}
                date={article.created_at}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
