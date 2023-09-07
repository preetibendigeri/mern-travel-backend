const mongoose = require('mongoose');
//const { Schema } = mongoose;
const PinSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true

    },
    title:{
        type: String,
        required: true,
        min:3
    },
    description:{
        type: String,
        required: true,
        min:3
    },
  rating:{
        type: Number,
        required: true,
        min:0,
        max:5
       
    },
    lat:{
        type: Number,
        required: true,
    },
    long:{
        type: Number,
        required: true,
    },
    timestamp:{
        type: Date,
        default:Date.now
    },
  });
module.exports= mongoose.model("Pin",PinSchema);