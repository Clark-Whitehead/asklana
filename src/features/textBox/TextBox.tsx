import { useState } from 'react';
import { addTextHuman } from './textBoxSlice.js';

export const TextBox = (props) => {


    const { dispatch } = props;

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const convo: HTMLElement | null = document.getElementById("conversation");

    const handleClick = () => {
        dispatch(addTextHuman(text));
        setTimeout(() => {
            convo.scrollTop = convo.scrollHeight
        }, 200);
        setText("");
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            dispatch(addTextHuman(text));
            setTimeout(() => {
                convo.scrollTop = convo.scrollHeight
            }, 200);
            setText("");
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