import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../minor/Card";
import Input from "../minor/Input";
import Select from "../minor/Select";
import "./Blogs.css";
import { Link, useNavigate } from "react-router-dom";

const Blogs = (props) => {
  const [articleList, setArticleList] = useState([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [authFilter, setAuthFilter] = useState("");
  const [authors, setAuthors] = useState("");
  var baseURL = props.baseURL;
  console.log(baseURL);

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
      username: "Arpit1",
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
      username: "Kavish",
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
      username: "Arpit1",
    },
  ];

  //api call
  const getAuthors = async function () {
    const url = baseURL + "getauthours";
    //console.log(url);
    const list = await axios.get(url);
    console.log(list.data);
    //console.log(list.data.name);
    var aut = list.data.map(({ name }) => ({ name }));
    console.log(aut);
    const temp = Object.values(aut);
    console.log(temp);
    setAuthors(temp);
  };

  //api call
  const getArticleList = async function () {
    const url = baseURL + "articles";
    //console.log(url);
    //const list = await axios.get(url);
    //console.log(list.data);
    //setArticleList(list.data);
    setArticleList(temp);
  };

  // //make API call
  useEffect(function () {
    getAuthors();
    getArticleList();
  }, []);

  // const navigate = useNavigate();
  // const viewArticle = (id) => {
  //   navigate("/view", {
  //     state: {
  //       id: index,
  //     },
  //   });
  // };

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
            {/* <Select
              label="Filter by Author"
              categories={authors}
              value={authFilter}
              func={setAuthFilter}></Select> */}
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
              <Link to="/view" state={article}>
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
              </Link>
                
            
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
