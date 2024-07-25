import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
    return (
        <div className="flex flex-row h-5/6 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-600 bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity-0">

            <Sidebar />
            <MessageContainer />

        </div>
    )
}

export default Home
