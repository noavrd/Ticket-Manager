import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";

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
      setTitleError("no title found");
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
        setError("server problem please try again");
        console.log(err);

      });
  }, []);

  //server error display
  if (error !== "") {
    return <div className="serverError">{error}</div>
  }

  //title not found display
  if (titleError !== "") {
    return(
      <div>
      <input
        id="searchInput"
        onChange={(event) => search(event.target.value)}
      ></input>
      <div>{titleError}</div>
      </div>
    ) 
  }

  return (
    <div>
      <input
        id="searchInput"
        onChange={(event) => search(event.target.value)}
      ></input>
      <AllTickets tickets={ticketsArray} />
    </div>
  );
}

export default Main;
