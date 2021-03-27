import React from "react";
import Slice from "./Slice";

function Ticket(props) {

    //show fixed date
    function fixedDate(num) {
        const date = new Date(num);
        const amOrPm = date.getHours() < 12 ? "AM" : "PM";
        return `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${amOrPm}`;
      }
    
    return(
        <div className="ticket">
          <br/>
            <span className="hideTicketButton" onClick={props.hideTicket}>Hide</span>
            <div className="title">{props.ticket.title}</div>
            <div className="content"> {""}<Slice content={props.ticket.content === undefined ? "" : props.ticket.content} maxChar="300"/></div>
            <div className="userEmail">Email: {props.ticket.userEmail}</div>
            <div className="creationTime">Created at: {fixedDate(props.ticket.creationTime)}</div>
            <div className="labels">
                {props.ticket.labels?.map((label, index) => <div className={`label ${label}`} key={index}>{label}  </div>)}
            </div>
            <div className="done">{props.ticket.done === undefined ?  "" : props.ticket.done.toString()}</div>
        </div>
        )
}

export default Ticket;