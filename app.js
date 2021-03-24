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
        const allTickets = await Ticket.find({});
        response.json(allTickets)
    } catch (e) {
        response.json({error: e})
    }
})
// app.get("/api/tickets",  (request, response) => {
//     response.send(tickets)
//  })

module.exports = app;
