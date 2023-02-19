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
  var baseURL = props.baseURL;
  console.log(baseURL);

  //api call
  const getAuthors = async function () {
    const url = baseURL + "getauthours";
    console.log(url);
    const list = await axios.get(url);
    setAuthors(list.data);
  };

  //api call
  const getArticleList = async function () {
    const url = baseURL + "articles";
    console.log(url);
    const list = await axios.get(url);
    setArticleList(list.data);
  };

  // //make API call
  useEffect(function () {
    getAuthors();
    getArticleList();
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
