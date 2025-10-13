import { useEffect, useState } from "react";
import MyMessages from "../pages/MyMessages";
import MessageCard from "./MessageCard";
import { fetchMessages } from "../api/api";
import MessageField from "./MessageField";
import { useUserStore } from "../store/store";

function Feed() {
  const jwt = useUserStore();
  const [messages, setMessages] = useState(undefined);

  useEffect(() => {
    const handlemessage = async () => {
      try {
        setMessages(await fetchMessages());
      } catch (err) {
        console.error(err)
      }
    }
    handlemessage()
  }, []);



  return (
    <>
      {jwt && <MessageField />}
      <div className="messages-section">
        <div className="container">
          <h2 className="section-title">Последние сообщения</h2>
          <div className="messages-grid">
            {messages && messages.map((message) => (<MessageCard key={message.id} {...message} />))}
          </div>
        </div>
      </div>
    </>
    )
}

export default Feed;

