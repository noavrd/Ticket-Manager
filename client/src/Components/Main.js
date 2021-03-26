import React, { useEffect, useState } from "react";
import axios from "axios";
import AllTickets from "./AllTickets.js";
import Search from "./Search.js";
const BASE_URL = "/api";

function Main() {


  return (
    <div>
        <Search/>
    </div>
  );
}

export default Main;