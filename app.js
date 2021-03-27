const express = require("express");
const app = express();
const cors = require("cors")
const Ticket = require("./models/ticket")


app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

app.get("/", (request, response) => {
    response.send("API server")
})

app.get("/api/tickets", async (request, response) => {
    try {
        const searchText = request.query.searchText;

        //all tickets
        if (!searchText) {
            const allTickets = await Ticket.find({});
            response.status(200).send(allTickets)
            return;
        }

        //tickets by search
        if (searchText.toLowerCase()) {
            const expectedTicket = await Ticket.find({
                title:{$regex: searchText.toLowerCase(), $options: "i" }
            });

            //tickets not found in search
            if (expectedTicket.length === 0) {
                response.status(404).send("No such title")
                return;
            }
            response.status(200).json(expectedTicket);
            return;
        }
    } catch (e) {
        response.status(500).json({error: e})
    }
})

//patch request to make done = true
app.patch("/api/tickets/:ticketId/done", async (request, response) => {
    const id = request.params.ticketId;
    let ticket;
    console.log(1)
    try {
        console.log(2)
        ticket="not found"

        ticket = await Ticket.findByIdAndUpdate(id, {done: true}, {new: true});
            response.status(200).json({updated: true})
        
       } catch (err) {
           if(ticket === "not found") {
            response.status(404).send("Ticket not found") 
           } else {
               response.status(500).send(err);
           }

    }

})

//patch request to make done = false
app.patch("/api/tickets/:ticketId/undone", async (request, response) => {
    const id = request.params.ticketId;
    let ticket;
    console.log(1)
    try {
        console.log(2)
        ticket="not found"

        ticket = await Ticket.findByIdAndUpdate(id, {done: false}, {new: true});
            response.status(200).json({updated: true})
        
       } catch (err) {
           if(ticket === "not found") {
            response.status(404).send("Ticket not found") 
           } else {
               response.status(500).send(err);
           }

    }

})

// app.post("/api/tickets", async (request, response) => {
//     const body = request.body;
//     date = new Date();
//     try {

//     Ticket.create({
//            "title": body.title,
//            "content": body.content,
//            "userEmail": body.userEmail,
//            "done": false,
//            "creationTime": Date.parse(date),
//            "labels": body.labels 
//        })
//        console.log(body)
//        response.send(body)
//     }   
//     catch {
//         response.send("Fill all the the form")
//     }
// })

module.exports = app;
