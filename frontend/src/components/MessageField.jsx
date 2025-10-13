import { sendMessage } from "../api/api"

function MessageField() {
const handleSubmit = async(e) => {
    try{
    const message = {content: e.target.content.value}
    sendMessage(message)
    } catch(err) {
        console.error(err)
    }

}
   <div className="create-message-section">
    <div className="container">
        <div className="create-message-card">
            <h2 className="create-message-title">Создать сообщение</h2>
            <form onSubmit={handleSubmit} className="create-message-form"></form>
        </div>
    </div>
   </div>

}

export default MessageField