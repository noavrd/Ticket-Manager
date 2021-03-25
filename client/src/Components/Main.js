import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";
import Search from "./Search.js";
const BASE_URL = "/api";

function Main() {

  const [counter, setCounter] = useState(0);
  function count () {

  }
  

  return (
    <div>
      <h1>Counter {counter}</h1>
        <Search />
    </div>
  );
}

export default Main;