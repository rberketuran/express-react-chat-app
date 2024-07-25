import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = (shouldFetch) => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        if (!shouldFetch) return;

        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/v1/users");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, [shouldFetch]);

    return { loading, conversations };
};
export default useGetConversations;