import { useState } from 'react';

export const TextBox = () => {

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
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
                <button className="col-4 btn btn-primary">
                    Send
                </button>
            </div>
        </div>
    )

}