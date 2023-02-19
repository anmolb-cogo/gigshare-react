import { useState, useEffect } from "react";
import axios from "axios";
import YourCard from "../minor/YourCard";
import Input from "../minor/Input";
import Select from "../minor/Select";
import "../Main/Blogs.css";

const Your = (props) => {
  const [userArticleList, setUserArticleList] = useState([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  var authToken = localStorage.getItem("token");

  var baseURL = props.baseURL;
  //api call
  const getUserArticleList = async function () {
    // const url = baseURL + "article/username/" + props.userDetails.name;
    const url = baseURL+"userarticles";
    console.log(url);
    const list = await axios.get(url,{
      headers: {
        Authorization: authToken,
      },
    });
    console.log(list.data);
    setUserArticleList(list.data.articles);
  };

  // //make API call
  useEffect(function () {
    getUserArticleList();
  }, []);

  return (
    <div className="home">
      <div className="landing">
        <div className="main">
          <span className="small">Your Publications</span>
          <span className="big">{props.userDetails.name}</span>
          <span className="mid">{props.userDetails.description}</span>
          <span className="filters">
            <Input
              type="text"
              placeholder="Search for an Article"
              label="Search for an Article"
              value={search}
              func={setSearch}
            ></Input>
            <Select
              label="Filter by Category"
              arr={props.categories}
              value={catFilter}
              func={setCatFilter}
            ></Select>
          </span>
        </div>
      </div>
      <div className="all-cards">
        {userArticleList
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
          .map((article) => {
            console.log(article.id);
            return (
              <YourCard
                id={article.id}
                poster={article.image}
                body={article.body}
                categories={props.categories}
                categoryId={article.category_id}
                title={article.article_name}
                date={article.created_at}
                baseURL={props.baseURL}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Your;
