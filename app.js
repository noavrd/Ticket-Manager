const express = require("express");
const app = express();
const cors = require("cors")
const { response } = require("express");
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
        if (searchText === undefined) {
            const allTickets = await Ticket.find({});
            response.status(200).json(allTickets)
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
    let ticket = await Ticket.findOne({_id:id});
    ticket = ticket.done;
    ticket = true

    await Ticket.updateOne({_id: id, done: ticket},function (err, result){
        if (err) {
            response.status(404).send(err);
          } else {
              response.status(200).json({updated: true})  
        }
    })
})

//patch request to make done = false
app.patch("/api/tickets/:ticketId/undone", async (request, response) => {
    const id = request.params.ticketId;
    let ticket = await Ticket.findOne({_id:id});
    ticket = ticket.done;
    ticket = false

    await Ticket.updateOne({_id: id, done: ticket},function (err, result){
        if (err) {
            response.status(404).send(err);
          } else {
              response.status(200).json({updated: true})  
        }
    })
})
module.exports = app;
