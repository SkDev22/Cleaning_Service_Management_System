import mongoose, {connection} from "mongoose";
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({

    Name : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    OrderType : {
        type : String,
        required : true
    },
    PhoneNo : {
        type : Number,
        required : true
    }

})

const Schedule = mongoose.model("Schedule",scheduleSchema);
module.exports = Schedule;

