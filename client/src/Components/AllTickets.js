import React from "react";
import Ticket from "./Ticket";

function AllTickets(props) {
  return (
    <div>
      {props.tickets.map((obj, index) => (
        <Ticket key={index} ticket={obj} />
      ))}
    </div>
  );
}

export default AllTickets;