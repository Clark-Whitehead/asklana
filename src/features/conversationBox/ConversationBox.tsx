import { Restart } from '../restart/Restart.tsx';

export const ConversationBox = (props) => {

    const { conversationBox, dispatch } = props;

    return (
        <div
            id="conversationBox"
            style={{height: 300, fontSize: 20}} 
            className="
                container 
                border 
                border-dark
                rounded
                bg-light
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
                value={conversationBox}
                
            />
                
            <Restart dispatch={dispatch}/>

        </div>
    )

}