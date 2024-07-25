import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

        return () => {
            setSelectedConversation(null);
        }
    }, [setSelectedConversation]);

    return (
        <div className={`md:min-w-[450px] flex flex-col w-full ${!selectedConversation ? 'hidden md:flex' : 'flex'}`}>
            {!selectedConversation ? <NoChatSelected /> :
                (<>
                    {/* Header */}
                    <div className="bg-slate-300 px-4 py-2 mb-2 flex items-center">
                        <button
                            onClick={() => setSelectedConversation(null)}
                            className="md:hidden text-gray-900 font-bold mr-2"
                        >
                            ←
                        </button>
                        <span className="label-text">To:</span>
                        <span className="text-gray-900 font-bold ml-2">{selectedConversation.fullname}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>)
            }
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.user.fullname} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
