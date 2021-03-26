import React, { useState } from "react";

function Ticket(props) {

    function fixedDate(num) {
        const date = new Date(num);
        const amOrPm = date.getHours() < 12 ? "AM" : "PM";
        return `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${amOrPm}`;
      }
    
    return(
        <ul className="ticket">
            <button className="hideTicketButton" onClick={props.hideTicket}>Hide</button>
            <li className="title">{props.ticket.title}</li>
            <li className="id">{props.ticket._id}</li>
            <li className="content">{props.ticket.content}</li>
            <li className="userEmail">{props.ticket.userEmail}</li>
            <li className="creationTime">{fixedDate(props.ticket.creationTime)}</li>
            <li className="labels">
                {props.ticket.labels?.map((label, index) => <div className={`label ${label}`} key={index}>{label}</div>)}
            </li>
            <li className="done">{props.ticket.done === undefined ?  "" : props.ticket.done.toString()}</li>
        </ul>
        )
}

export default Ticket;