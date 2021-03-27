const Mongoose = require("mongoose");

const ticketsSchema = new Mongoose.Schema({
    "done": {type: Boolean, default: false},
    "labels": [String],
    "title": {type: String, require: true},
    "content": {type: String, require: true},
    "userEmail": {type:String, require: true},
    "creationTime": {type:Number, require:true},
});

const Ticket = Mongoose.model("Ticket", ticketsSchema);

module.exports = Ticket;