import { useLocation } from "react-router-dom";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const location = useLocation();
    const shouldFetch = location.pathname !== '/signup';
    const { loading, conversations } = useGetConversations(shouldFetch);
    if (!shouldFetch) {
        return null;
    }
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;


/* import Conversation from "./Conversation"

const Conversations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations
 */