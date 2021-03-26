import React, { useState } from "react";
import Ticket from "./Ticket";

function AllTickets(props) {
  const [hiddenTickets, setHiddenTickets] = useState([]);
  const [counter, setCounter] = useState(0);
  const [restore, setRestore] = useState([])

  console.log(restore)
  function hideTicket(index) {
    if ( hiddenTickets.includes(index) ) {
      return;
    }
    setHiddenTickets( hiddenTickets.concat([index]) );
    setCounter(counter + 1)
  }

  function restore() {
    
  }
  return (
    <div className="tickets">
      <h1 id="hideTicketsCounter">{counter}</h1>
      <button id="restoreHideTickets">Restore</button>
      {props.tickets.map((obj, index) => (
        hiddenTickets.includes(index)
        ? null
        : 
        <Ticket key={index} ticket={obj} allTickets={props.tickets} hideTicket={() => hideTicket(index)}/>
      ))}
    </div>
  );
}

export default AllTickets;