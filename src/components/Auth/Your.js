import { useState, useEffect } from "react";
import axios from "axios";
import YourCard from "../minor/YourCard";
import Input from "../minor/Input";
import Select from "../minor/Select";
import "../Main/Blogs.css";

const Your = (props) => {
  const [articleList, setArticleList] = useState([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [authFilter, setAuthFilter] = useState("");

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
          <span className="small">Your Publications</span>
          <span className="big">Anmol Bansal</span>
          <span className="mid">Some Bio of the Person</span>
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
          .map((article) => {
            return (
              <YourCard
                key={article.id}
                poster={article.image}
                body={article.body}
                categories={props.categories}
                categoryId={article.category_id}
                title={article.article_name}
                date={article.created_at}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Your;
