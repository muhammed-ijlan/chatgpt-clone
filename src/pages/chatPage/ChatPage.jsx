import NewPrompt from '../../components/newPrompt/NewPrompt';
import './chatpage.css';

const ChatPage = () => {

    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className={"message"}>  Message </div>
                    <div className={"message user"}>  Message </div>
                    <div className={"message"}>  Message </div>
                    <div className={"message"}>  Message </div>
                    <div className={"message user"}>  Message </div>
                    <div className={"message"}>  Message </div>
                    <div className={"message"}>  Message </div>
                    <div className={"message user"}>  Message </div>
                    <div className={"message"}>  Message </div>

                    <NewPrompt />

                </div>
            </div>
        </div>
    )
}

export default ChatPage