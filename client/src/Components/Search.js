import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";

const BASE_URL = "/api";



function Search() {
    const [inputValue, setInputValue] = useState("");
    const [ticketsArray, setTicketsArray] = useState([]);

    
  useEffect(() => {
      console.log("RENDERRR")
    axios
      .get(`${BASE_URL}/tickets`)
      .then((response) => {
        setTicketsArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    async function searchHandler(inputValue) {
        console.log("FUNCTIONNN")
       const response = await axios
          .get(`${BASE_URL}/tickets?searchText=${inputValue}`);
          try {
                setTicketsArray(response.data);
                console.log(response.data)
              
          } catch(err) {
            setTicketsArray([]);

              console.log(err);
          }
    }

    return(
        <div>
            <input id="searchInput" onChange={(event) => searchHandler(event.target.value)}></input>
            <AllTickets tickets={ticketsArray} />
        </div>

    )
}

export default Search;

