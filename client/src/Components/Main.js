import React, { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "./Ticket";

function Main() {
    const [ticketsArray, setTicketsArray] = useState([]);
    useEffect(() => {
       axios.get(`/api/tickets`).then((response) => {
        setTicketsArray(response.data);
       }).catch((err) => {
           console.log(err);
       })
    }, []) 
    //put something in [] when i want a state to update

    return(
        <div>
            {/* <AllTickets
            tickets={ticketsArray}
            /> */}
            {ticketsArray.map((obj, index) => <Ticket key={index} ticket={obj}/>)}
        </div>
    )
}
export default Main;