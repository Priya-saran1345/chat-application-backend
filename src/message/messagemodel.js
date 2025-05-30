import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Chatuser"
},
message:{
    type:String,
    trim:true
},
chat:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chat"
}
},{timestamps:true})
const Message = mongoose.model('Message', messageschema);
export default Message;