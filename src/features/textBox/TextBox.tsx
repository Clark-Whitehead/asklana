import { useState } from 'react';
import { addText } from '../conversationBox/conversationBoxSlice.js';

export const TextBox = (props) => {


    const { dispatch } = props;

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    }


    const handleClick = () => {
        dispatch(addText(text));
        setText("");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <input
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