import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";

const BASE_URL = "/api";

function Search(props) {
  const [ticketsArray, setTicketsArray] = useState([]);
  console.log(props)

  async function search(inputValue) {
    setTicketsArray([]);
    const response = await axios.get(
      `${BASE_URL}/tickets?searchText=${inputValue}`
    );
    try {
      setTicketsArray(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    axios
      .get(`${BASE_URL}/tickets`)
      .then((response) => {
        setTicketsArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

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

export default Search;
