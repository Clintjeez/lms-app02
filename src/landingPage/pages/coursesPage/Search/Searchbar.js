import React, { useState } from "react";
import "./Searchbar.scss";
import { GoSearch } from "react-icons/go";
// import fake data
import JSONDATA from "../MOCK_DATA.json";
const courseList = {
  listItems: {
    margin: "10px",
    textTransform: "capitalize",
    justifyContent: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#03023b",
  },
  difficulty: {
    fontSize: "10px",
    color: "grey",
    paddingLeft: "5px",
  },
  author: {
    fontSize: "16px",
    color: "grey",
    paddingLeft: "5px",
  },
  tags: {
    fontSize: "14px",
    color: "green",
    display: "flex",
    paddingLeft: "5px",
  },
};

const Searchbar = () => {
  const listItemStyle = courseList.listItems;
  const itemTitle = courseList.title;
  const itemDifficulty = courseList.difficulty;
  const itemAuth = courseList.author;
  const itemTags = courseList.tags;

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="course-search-app">
        <form className="course-search form-control" role="course-search">
          <label htmlFor="course-search"></label>
          <input
            type="search"
            id="course-searchbar"
            placeholder="Search courses"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          {/* <button className="search-btn">
            <GoSearch size={25} style={{ fill: "#3a86ff" }} />
          </button> */}
        </form>

        {JSONDATA.filter((val) => {
          // nothing in search
          if (searchTerm === "") {
            return val;
          }
          // search by title
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          // search by difficulty
          else if (
            val.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          // search by author
          else if (
            val.author.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div style={listItemStyle} key={key}>
              <p style={itemTitle}>{val.title}</p>
              <p style={itemAuth}>{val.author}</p>
              <p style={itemDifficulty}>{val.difficulty}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Searchbar;
