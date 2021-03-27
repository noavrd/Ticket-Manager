import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";
import logo from "./logo.png"

const BASE_URL = "/api";

function Main() {
  
  const [ticketsArray, setTicketsArray] = useState([]);
  const [error, setError] = useState("");
  const [titleError, setTitleError] = useState("");

  //search by title
  async function search(inputValue) {
    setTicketsArray([]);
    await axios.get(
      `${BASE_URL}/tickets?searchText=${inputValue}`)
      .then((response) => {
      setTicketsArray(response.data);
      setTitleError("");

    }).catch((err) => {
      setTitleError("We coudl'nt find the title");
      console.log(err);
    })
  }

  //call all the tickets on load
  useEffect(() => {
    axios
      .get(`${BASE_URL}/tickets`)
      .then((response) => {
        setTicketsArray(response.data);
        setError("");

      })
      .catch((err) => {
        setError("server problem");
        console.log(err);

      });
  }, []);
  

  //server error display
  if (error !== "") {
    return (
      <div>
        <div className="serverError errorTitle">{error}</div>
        <div className="serverError errorTitle">Please try again</div>

        <img src={logo}></img>
      </div>

    ) 
  }

  //title not found display
  if (titleError !== "") {
    return(
      <div>
        <span className="fa fa-search">  </span>
        <input
        id="searchInput"
        onChange={(event) => search(event.target.value)}>
        </input>
        <br/><br/>
        <div className="errorTitle">{titleError}</div>
        <div className="errorTitle">Try something else...</div>
        <img src={logo}></img>
      </div>
    ) 
  }

  return (
    <div>
      <span className="fa fa-search"></span>
      <input
      id="searchInput"
      onChange={(event) => search(event.target.value)}
      placeholder="Search..."
      >
      </input>
      <AllTickets tickets={ticketsArray} />
    </div>
  );
}

export default Main;
