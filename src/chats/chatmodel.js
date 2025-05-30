import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    chatName: {
        type: String,
        required: true
    },
    isGroup: {
        type: Boolean,
        default: false
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ChatUser"
        }
    ]
    ,
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupadmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChatUser"
    }
}, {
    timestamps: true
})
const Chat = mongoose.model("Chat", chatSchema);
export default Chat