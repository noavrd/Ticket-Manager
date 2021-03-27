import axios from "axios";
import React, { useState } from "react";
import Slice from "./Slice";

function Ticket(props) {

  const [checkDone, setCheckDone] = useState(props.ticket.done);
    //show fixed date
    function fixedDate(num) {
        const date = new Date(num);
        const amOrPm = date.getHours() < 12 ? "AM" : "PM";
        return `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${amOrPm}`;
      }

      //mark tocket as done / undone
      function isDone(check) {
        console.log(1)
        const done = check ? "done" : "undone";
        console.log(props.ticket._id)

        axios.patch(`/api/tickets/${props.ticket._id}/${done}`)
        .then((response) => {
          console.log(response.data)
          if(response.data.updated) {
            setCheckDone(check)
          }
        })
      }
    return(
        <div className={checkDone ? "ticket ticketDone" : "ticket"}>
          <br/>
            <span className="hideTicketButton" onClick={props.hideTicket}>Hide</span>
            <div className="title">{props.ticket.title}</div>
            <div className="content"> {""}<Slice content={props.ticket.content === undefined ? "" : props.ticket.content} maxChar="300"/></div>
            <div className="userEmail">Email: {props.ticket.userEmail}</div>
            <div className="creationTime">Created at: {fixedDate(props.ticket.creationTime)}</div>
            <div className="labels">
                {props.ticket.labels?.map((label, index) => <div className={`label ${label}`} key={index}>{label}  </div>)}
            </div>
            <div className="checkbox">
            Done 
              <div className="container" onClick={() => isDone(!checkDone)}>
                  <input type="checkbox" className="done" checked={checkDone}/>
                  <span className="checkmark">✔</span>
              </div>
            </div>
            {/* <div className="done">Done</div>
            <input type="checkbox" className="check" name="done" onClick={() => isDone(!checkDone)}></input> */}
                {/* <span className="mark">{checkDone ? "✔" : ""}</span> */}
            {/* </div> */}
            {/* <div className="done">Done: {props.ticket.done === undefined ?  "" : props.ticket.done.toString()}</div> */}
        </div>
        )
}

export default Ticket;