import React, { useState } from "react";

import "../../Searchbar.scss";

import SearchFunctionGrid from "../SearchFunction/SearchFunctionGrid";
import SearchPagination from "../SearchFunction/SearchPagination";

const SearchFunction = ({ data, searchTerm }) => {
  let results = [];

  let countResults = 0;
  // if results too long 6+ show pagination
  function togglePagination() {
    // count results from search and push the values to an array
    data.slice(0, [data.length]).filter((val) => {
      return val;
      // // nothing in search
      // if (searchTerm === "") {
      //   //pass
      // }
      // // search by title
      // else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      //   results.push(val);
      //   return val;
      // }
      // // search by difficulty
      // else if (
      //   val.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
      // ) {
      //   results.push(val);
      //   return val;
      // }
      // // search by author
      // else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      //   results.push(val);
      //   return val;
      // }
    });
    let count = results.length;
    countResults = count;
    // logic for if count is over 6 then pagination set true
    if (count > 6) {
      // console.log(countResults);
      return true;
    } else {
      // console.log(countResults);
      return false;
    }
  }

  function showMsg() {
    if (countResults === 0 && countResults < 1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {togglePagination() ? (
        <SearchPagination results={results} />
      ) : (
        <SearchFunctionGrid results={results} />
      )}
      {showMsg() ? <h3 className="no-results">No search results</h3> : ""}
    </div>
  );
};

export default SearchFunction;
