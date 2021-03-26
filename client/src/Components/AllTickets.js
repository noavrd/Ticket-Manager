import React from "react";
import Ticket from "./Ticket";

function AllTickets(props) {
 
  return (
    <div className="tickets">
      {props.tickets.map((obj, index) => (
        <Ticket key={index} ticket={obj} allTickets={props.tickets}/>
      ))}
    </div>
  );
}

export default AllTickets;