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
            style={{height: 300, fontSize: 20, backgroundColor: '#006C81'}} 
            className="
                container 
                border 
                border-dark
                rounded
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