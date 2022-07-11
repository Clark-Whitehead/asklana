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
        <div style={{backgroundColor: '#F18000'}} className="container rounded text-white pb-3 mb-3">
            <div className="row mt-5">
                <div className="col">
                    <br />
                    <h1>{title}</h1>
                </div>
            </div>
            <div style={{backgroundColor: 'white'}} className="container rounded">
                <div className="row mt-5">
                    <div className="col text-dark text-left">
                        <br />
                        <h4>
                            {conversation.split('\n').map((line, i) => (
                                <span key={i}>
                                    { line }
                                    <br/>
                                </span>
                            ))}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}