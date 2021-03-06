import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAi, addHuman, selectChat } from '../chatSlice';
import { addResponse } from '../../options/optionsSlice';
import store from '../../../app/store'
import axios from 'axios';

export const TextBox = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    //grab the main chatbox so we can scroll to bottom after enter or send
    const convo = document.getElementById("conversation");

    const handleClick = () => {

        if (text.length > 0) {

            dispatch(addHuman(text));

            setText("");

            axios.post('http://localhost:4001/apiTest', {message: store.getState().chat.chat})
            .then(res => {
                dispatch(addAi(res.data.responseOut));
                dispatch(addResponse({id: store.getState().chat.id, chat: store.getState().chat.chat}));
                convo.scrollTop = convo.scrollHeight;
            })
            .catch(err => {
                console.log(err)
            });

        }
    }

    const handleEnter = (event) => {

        if (text.length > 0) {
            if (event.key === "Enter") {


                dispatch(addHuman(text));

                setText("");

                axios.post('http://localhost:4001/apiTest', {message: store.getState().chat.chat})
                .then(res => {
                    dispatch(addAi(res.data.responseOut));
                    dispatch(addResponse({id: store.getState().chat.id, chat: store.getState().chat.chat}));
                    convo.scrollTop = convo.scrollHeight;
                })
                .catch(err => {
                    console.log(err)
                });


            }
        }
    }

    

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 ml-0">
                    <input
                        id="main-text-box"
                        onKeyDown={handleEnter}
                        onChange={handleTextChange}
                        style={{height: 50, fontSize: 15, color: '#000000'}}
                        enterKeyHint="send" 
                        type="text" 
                        autoFocus
                        className="w-100 pl-3"
                        placeholder="Type your message..."
                        value={text}
                    />
                </div>
                <div className="container col-4">
                    <button 
                        style={{
                            backgroundColor: "#F18000", 
                            color: "white", 
                            width: '100%', 
                            height: 50}} 
                        onClick={handleClick} className="btn border border-dark font-weight-bold">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )

}