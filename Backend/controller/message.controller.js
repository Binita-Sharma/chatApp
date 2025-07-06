import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  //console.log("Message sent to binita mam",req.params.id, req.body.message);

  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // Assuming req.user is populated with the authenticated user's info , basically current logeed in user

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      // If conversation doesn't exist, create a new one
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });

      if (newMessage) {
        conversation.messages.push(newMessage._id);
      }
      await Promise.all([conversation.save(), newMessage.save()]);
      res.status(201).json({
        message: "Message sent successfully", newMessage
      });
    
  } catch (error) {
    console.error("Error sending message:" + error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id; // Assuming req.user is populated with the authenticated user's info

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatUser] },
    }).populate("messages");//for actual message data

    if (!conversation) {
      return res.status(201).json([]);
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    console.error("Error fetching messages:" + error);
    res.status(500).json({ error: "Internal server error" });
  }
};