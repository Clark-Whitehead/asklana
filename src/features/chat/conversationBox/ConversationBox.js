//import components
import { Restart } from '../restart/Restart.js';

//import Redux
import { useSelector } from 'react-redux';
import { selectChat } from '../chatSlice.js';

//export component
export const ConversationBox = () => {

    const chat = useSelector(selectChat)

    return (
        <div
            id="conversationBox"
            style={{height: 300, 
                fontSize: 20, 
                backgroundImage: 'url("https://media.istockphoto.com/photos/natural-wood-texture-picture-id1145602814?k=20&m=1145602814&s=612x612&w=0&h=dIJlMEyULYudmRnJZUSoOwfcF1nLBWWwHrjP764kM3s=")', 
                borderTopLeftRadius: '20px', 
                borderTopRightRadius: '20px'}} 
            className="
                container
                mb-3">
            
            <textarea  
                id="conversation"
                readOnly
                className="
                col
                h-75
                text-left
                mt-3
                pt-3
                pb-3
                mb-n2"
                value={chat}
                
            />
                
            <Restart />

        </div>
    )

}