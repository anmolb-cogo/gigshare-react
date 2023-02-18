import Card from "../minor/Card";
import Input from "../minor/Input";
import Select from "../minor/Select";
import "./Blogs.css";

const Blogs = () => {
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
              label="Search for an Article"></Input>
            <Select label="Filter by Category"></Select>
            <Select label="Filter by Author"></Select>
          </span>
        </div>
      </div>
      <div className="all-cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Blogs;
