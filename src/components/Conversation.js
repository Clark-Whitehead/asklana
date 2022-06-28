import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export const Conversation = () => {

    let titleUrl = useParams().conversationId

    const [title, setTitle] = useState("")
    const [conversation, setConversation] = useState("")

    // console.log(title)

    const getSharedConversations = () => {

        Axios.post('http://localhost:4001/getSharedConversations', {titleUrl: titleUrl})
        .then(res => {
            setTitle(res.data[0].title);
            setConversation(res.data[0].conversation)
        })
        .catch(err => {
            console.log(err)
        });
        
    }

    getSharedConversations();

    return (
        <div style={{backgroundColor: '#006C81'}} className="container rounded text-white pb-3 mb-3">
            <div className="row mt-5">
                <div className="col">
                    <br />
                    <h1>{title}</h1>
                </div>
            </div>
            <div style={{backgroundColor: '#ADD8E6'}} className="container rounded">
                <div className="row mt-5">
                    <div className="col text-dark text-left">
                        <p>{conversation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}