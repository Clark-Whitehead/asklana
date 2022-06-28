import { useParams } from 'react-router-dom';
import Axios from 'axios';

export const Conversation = () => {

    let title = useParams().conversationId

    // console.log(title)

    const getSharedConversations = () => {
        
        Axios.get("http://localhost:4001/getSharedConversations").then((response) => {
            console.log(response)
        });
        
    }

    getSharedConversations();

    return (
        <h1>{title}</h1>
    )
}