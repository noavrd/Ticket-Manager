const express = require("express");
const app = express();
const cors = require("cors")
const tickets = require("./seeds/tickets/tickets.json")


app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

app.get("/", (request, response) => {
    response.send("API server")
})

app.get("/api/tickets",  (request, response) => {
    response.send(tickets)
 })

module.exports = app;
