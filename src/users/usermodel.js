import mongoose from "mongoose";
const ChatUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture:{
        type:String
    }
})
const Chatuser = mongoose.models.ChatUser || mongoose.model("ChatUser", ChatUser);
export default Chatuser
