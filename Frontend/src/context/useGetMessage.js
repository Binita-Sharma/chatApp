import React, { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";
import Cookies from "js-cookie"; // ✅ Import js-cookie to handle cookies

function useGetMessage() {
  const [loading,setLoading] = useState(false);
  const { messages,setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      if (selectedConversation && selectedConversation._id) {
        try {

        const token = Cookies.get("jwt"); // ✅ Get JWT from cookies

          const res = await axios.get(
            `http://localhost:5002/message/get/${selectedConversation._id}`,
            {
              withCredentials: true, // ✅ allows cookie access
              headers: {
                Authorization: `Bearer ${token}`, // ✅ add token here
              },
            }
          );
          setMessages(res.data.messages || []);
          setLoading(false);
        } catch (error) {
          console.log("Error in useGetMessage", error);
          setLoading(false);
        }
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);

  return {
    messages,
    loading
  };
};

export default useGetMessage;
