import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogOutButton from './LogOutButton';
import useConversation from '../../zustand/useConversation';

const Sidebar = () => {
    const { selectedConversation } = useConversation();

    return (
        <div className={`border-r border-slate-500 p-4 flex flex-col w-full md:w-auto ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogOutButton />
        </div>
    );
};

export default Sidebar;
