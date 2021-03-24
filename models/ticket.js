const Mongoose = require("mongoose");

const ticketsSchema = Mongoose.Schema({
    "title": {type: String, require: true},
    "content": {type: String, require: true},
    "userEmail": {type:String, require: true},
    "done": {type: Boolean, default: false},
    "creationTime": {type:Number, require:true},
    "labels": [String] 
});

const Ticket = Mongoose.model("Ticket", ticketsSchema);

module.exports = Ticket;