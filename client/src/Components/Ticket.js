import React from "react";

function Ticket(props) {

    return(
        <ul className="ticket">
            <li className="title">{props.ticket.title}</li>
            <li className="id">{props.ticket._id}</li>
            <li className="content">{props.ticket.content}</li>
            <li className="userEmail">{props.ticket.userEmail}</li>
            <li className="creationTime">{props.ticket.creationTime}</li>
            <li className="labels">
                {props.ticket.labels?.map((label, index) => <div className={`label ${label}`} key={index}>{label}</div>)}
            </li>
            <li className="done">{props.ticket.done.toString()}</li>
        </ul>
        )
}

export default Ticket;