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
                <div className="col-8 m-auto">
                    <input
                        onKeyDown={handleEnter}
                        onChange={handleTextChange}
                        style={{height: 50, fontSize: 15}}
                        enterKeyHint="send" 
                        type="text" 
                        autoFocus
                        className="w-100 pl-3"
                        placeholder="Type your message..."
                        value={text}
                    />
                </div>
                <button onClick={handleClick} className="col-4 btn btn-primary">
                    Send
                </button>
            </div>
        </div>
    )

}