import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";
import Search from "./Search.js";
const BASE_URL = "/api";

function Main() {
  const [ticketsArray, setTicketsArray] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/tickets`)
//       .then((response) => {
//         setTicketsArray(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
    //put something in [] when i want a state to update

  return (
    <div>
        <Search/>
        {/* <AllTickets tickets={ticketsArray} /> */}
    </div>
  );
}

export default Main;
